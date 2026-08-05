import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const [inquiries, setInquiries] = useState([]);
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const fetchInquiries = async () => {
    const token = localStorage.getItem('guardall_token');

    try {
      const response = await fetch('http://localhost:5000/api/inquiries', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        if (response.status === 401 || response.status === 403) {
          handleLogout();
          return;
        }
        throw new Error('Failed to fetch inquiries');
      }

      const data = await response.json();
      setInquiries(data);
      if (data.length > 0) {
        setSelectedInquiry(data[0]); // Auto-select the first item
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('guardall_token');
    localStorage.removeItem('guardall_admin');
    navigate('/admin/login');
  };

  // Helper function to render status badges
  const renderStatusBadge = (status) => {
    const statusMap = {
      new: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      in_discussion: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      default: 'bg-gray-500/10 text-gray-400 border-gray-500/20'
    };

    const style = statusMap[status] || statusMap.default;

    return (
      <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase border ${style}`}>
        {status ? status.replace('_', ' ') : 'General'}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-6 flex flex-col">
      {/* Top Header */}
      <header className="flex justify-between items-center mb-6 pb-4 border-b border-gray-800">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Guard-All Admin Portal</h1>
          <p className="text-xs text-gray-400 mt-0.5">Client Inquiries & System Leads Management</p>
        </div>
        <button
          onClick={handleLogout}
          className="px-4 py-2 text-sm font-medium bg-red-500/10 text-red-400 border border-red-500/20 rounded-lg hover:bg-red-600 hover:text-white transition-all shadow-sm"
        >
          Logout
        </button>
      </header>

      {/* Dynamic Content Area */}
      {loading ? (
        <div className="flex-1 flex items-center justify-center">
          <p className="text-gray-400 animate-pulse">Loading inquiries...</p>
        </div>
      ) : error ? (
        <div className="flex-1 flex items-center justify-center">
          <p className="text-red-400 bg-red-950/50 px-4 py-2 rounded-lg border border-red-800/50">{error}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1">
          
          {/* MAIN CONTENT AREA: Table/List View (Takes 2 Columns) */}
          <div className="lg:col-span-2 bg-gray-900 rounded-xl border border-gray-800 shadow-xl overflow-hidden flex flex-col">
            <div className="mx-20 p-4 bg-gray-800/40 border-b border-gray-800 flex justify-between items-center">
              <h2 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                Inquiries ({inquiries.length})
              </h2>
              <span className="text-xs text-gray-500">Click a record to view details</span>
            </div>

            <div className="overflow-x-auto flex-1">
              <table className="w-full text-left text-sm text-gray-300">
                <thead className="bg-gray-800/60 text-gray-400 uppercase text-xs border-b border-gray-800">
                  <tr>
                    <th className="p-4">Client</th>
                    <th className="p-4">Interest</th>
                    <th className="p-4">Date</th>
                    <th className="p-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800/60">
                  {inquiries.length === 0 ? (
                    <tr>
                      <td colSpan="4" className="p-8 text-center text-gray-500">
                        No inquiries submitted yet. Once clients submit inquiries,
                        they will appear here for review and management.
                      </td>
                    </tr>
                  ) : (
                    inquiries.map((item) => {
                      const isSelected = selectedInquiry?.id === item.id;
                      return (
                        <tr
                          key={item.id}
                          onClick={() => setSelectedInquiry(item)}
                          className={`cursor-pointer transition-colors ${
                            isSelected
                              ? 'bg-blue-600/10 border-l-4 border-l-blue-500'
                              : 'hover:bg-gray-800/40'
                          }`}
                        >
                          <td className="p-4">
                            <div className="font-semibold text-white">{item.client_name}</div>
                            <div className="text-xs text-gray-400">{item.email}</div>
                          </td>
                          <td className="p-4 text-blue-400 font-medium">
                            {item.interest || 'General'}
                          </td>
                          <td className="p-4 text-xs text-gray-400 whitespace-nowrap">
                            {new Date(item.created_at).toLocaleDateString()}
                          </td>
                          <td className="p-4">
                            {renderStatusBadge(item.status)}
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* SIDE CONTENT AREA: Detailed View & Metrics (Takes 1 Column) */}
          <div className="space-y-6">
            
            {/* Quick Metrics Card */}
            <div className="bg-gray-900 rounded-xl border border-gray-800 p-4 shadow-xl grid grid-cols-2 gap-4">
              <div className="bg-gray-800/40 p-3 rounded-lg border border-gray-800/60">
                <p className="text-xs text-gray-400 uppercase">Total Leads</p>
                <p className="text-xl font-bold text-white mt-1">{inquiries.length}</p>
              </div>
              <div className="bg-gray-800/40 p-3 rounded-lg border border-gray-800/60">
                <p className="text-xs text-gray-400 uppercase">New Inquiries</p>
                <p className="text-xl font-bold text-emerald-400 mt-1">
                  {inquiries.filter((i) => i.status === 'new').length}
                </p>
              </div>
            </div>

            {/* Main Detail Panel */}
            <div className="bg-gray-900 rounded-xl border border-gray-800 shadow-xl p-5 flex flex-col justify-between min-h-[420px]">
              {selectedInquiry ? (
                <div>
                  <div className="flex justify-between items-start pb-4 border-b border-gray-800">
                    <div>
                      <h3 className="text-lg font-bold text-white">{selectedInquiry.client_name}</h3>
                      {selectedInquiry.company && (
                        <p className="text-xs text-gray-400">{selectedInquiry.company}</p>
                      )}
                    </div>
                    {renderStatusBadge(selectedInquiry.status)}
                  </div>

                  <div className="mt-4 space-y-4 text-sm">
                    <div>
                      <span className="text-xs text-gray-400 uppercase tracking-wider block mb-1">Contact Information</span>
                      <p className="text-gray-200">{selectedInquiry.email}</p>
                      <p className="text-gray-400 text-xs mt-0.5">{selectedInquiry.phone || 'No phone provided'}</p>
                    </div>

                    <div>
                      <span className="text-xs text-gray-400 uppercase tracking-wider block mb-1">Area of Interest</span>
                      <p className="text-blue-400 font-medium">{selectedInquiry.interest || 'General Inquiry'}</p>
                    </div>

                    <div>
                      <span className="text-xs text-gray-400 uppercase tracking-wider block mb-1">Received Date</span>
                      <p className="text-gray-300 text-xs">
                        {new Date(selectedInquiry.created_at).toLocaleString()}
                      </p>
                    </div>

                    <div>
                      <span className="text-xs text-gray-400 uppercase tracking-wider block mb-1">Message</span>
                      <div className="bg-gray-950 p-3 rounded-lg border border-gray-800 text-gray-300 text-xs leading-relaxed max-h-48 overflow-y-auto whitespace-pre-wrap">
                        {selectedInquiry.message || 'No message content.'}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex-1 flex items-center justify-center text-gray-500 text-sm">
                  Select an inquiry from the list to view full details.
                </div>
              )}
            </div>

          </div>

        </div>
      )}
    </div>
  );
}