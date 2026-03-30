"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { User, LogOut, Settings, Image as ImageIcon, Briefcase, FileText, UploadCloud, Mail, Trash2 } from "lucide-react";

export default function AdminDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  const [admissions, setAdmissions] = useState<any[]>([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState("Dashboard");
  
  // Gallery Upload State
  const [uploading, setUploading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Campus");
  
  // Contact Messages State
  const [contacts, setContacts] = useState<any[]>([]);
  
  // Site Settings State
  const [siteSettings, setSiteSettings] = useState({
    collegeName: "",
    address: "",
    phone: "",
    email: "",
    instagramUrl: "",
    facebookUrl: "",
    twitterUrl: "",
    linkedinUrl: ""
  });
  const [isSavingSettings, setIsSavingSettings] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
      const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Login failed");
      
      setToken(data.token);
      setIsLoggedIn(true);
      fetchAdmissions(data.token);
      fetchContacts(data.token);
      fetchSettings();
    } catch (error: any) {
      alert(error.message);
    }
  };

  const fetchAdmissions = async (authToken: string) => {
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
      const res = await fetch(`${API_URL}/data/admissions`, {
        headers: { Authorization: `Bearer ${authToken}` }
      });
      const data = await res.json();
      if (res.ok) setAdmissions(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchContacts = async (authToken: string) => {
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
      const res = await fetch(`${API_URL}/data/contacts`, {
        headers: { Authorization: `Bearer ${authToken}` }
      });
      const data = await res.json();
      if (res.ok) setContacts(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchSettings = async () => {
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
      const res = await fetch(`${API_URL}/data/settings`);
      const data = await res.json();
      if (res.ok) setSiteSettings(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSavingSettings(true);
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
      const res = await fetch(`${API_URL}/data/settings`, {
        method: "PUT",
        headers: { 
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(siteSettings),
      });
      if (!res.ok) throw new Error("Failed to update settings");
      alert("Site settings updated successfully!");
    } catch (error: any) {
      alert(error.message);
    } finally {
      setIsSavingSettings(false);
    }
  };

  const handleDeleteAdmission = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this admission application?")) return;
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
      const res = await fetch(`${API_URL}/data/admissions/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` }
      });
      if (!res.ok) throw new Error("Failed to delete admission");
      setAdmissions(admissions.filter(adm => adm._id !== id));
      alert("Admission deleted successfully");
    } catch (error: any) {
      alert(error.message);
    }
  };

  const handleDeleteContact = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this message?")) return;
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
      const res = await fetch(`${API_URL}/data/contacts/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` }
      });
      if (!res.ok) throw new Error("Failed to delete message");
      setContacts(contacts.filter(contact => contact._id !== id));
      alert("Message deleted successfully");
    } catch (error: any) {
      alert(error.message);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setToken("");
    setAdmissions([]);
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return alert("Please select a file to upload.");

    setUploading(true);
    const formData = new FormData();
    formData.append("image", file);
    formData.append("title", title);
    formData.append("category", category);

    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
      
      // Direct post to backend (temporarily bypassing auth for fast dev flow)
      const res = await fetch(`${API_URL}/data/gallery`, {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error("Upload failed");
      alert("Image uploaded successfully!");
      setFile(null);
      setTitle("");
      setCategory("Campus");
    } catch (error) {
      console.error(error);
      alert("Failed to upload image. Is the backend server running?");
    } finally {
      setUploading(false);
    }
  };

  if (!isLoggedIn) {
    return (
      <main className="min-h-screen flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-gray-800"
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">Admin Portal</h1>
            <p className="text-foreground/60 mt-2">Authorized Personnel Only</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Admin ID</label>
              <input 
                type="text" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-800 border outline-none" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input 
                type="password" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-800 border outline-none" 
              />
            </div>
            <button type="submit" className="w-full py-3 bg-gradient-to-r from-red-500 to-orange-500 hover:opacity-90 text-white rounded-lg font-bold">
              Secure Login
            </button>
          </form>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
      {/* Sidebar */}
      <motion.aside 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="w-full md:w-64 bg-slate-900 text-white rounded-3xl p-6 flex flex-col shadow-xl"
      >
        <div className="mb-8 pt-4">
          <h2 className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">BMR Admin</h2>
          <p className="text-xs text-white/50 mt-1">Super Administrator</p>
        </div>

        <nav className="flex-1 space-y-2">
          <button 
            onClick={() => setActiveTab("Dashboard")}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-colors ${activeTab === 'Dashboard' ? 'bg-white/10 text-white' : 'text-white/60 hover:bg-white/5'}`}
          >
            <Briefcase size={18} /> <span>Dashboard</span>
          </button>
          <button 
            onClick={() => setActiveTab("Gallery Upload")}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'Gallery Upload' ? 'bg-white/10 text-white font-medium' : 'text-white/60 hover:bg-white/5'}`}
          >
            <ImageIcon size={18} /> <span>Gallery Upload</span>
          </button>
          <button 
            onClick={() => { setActiveTab("Contact Messages"); fetchContacts(token); }}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'Contact Messages' ? 'bg-white/10 text-white font-medium' : 'text-white/60 hover:bg-white/5'}`}
          >
            <Mail size={18} /> <span>Contact Messages</span>
          </button>
          <button 
            onClick={() => { setActiveTab("Site Settings"); fetchSettings(); }}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'Site Settings' ? 'bg-white/10 text-white font-medium' : 'text-white/60 hover:bg-white/5'}`}
          >
            <Settings size={18} /> <span>Site Settings</span>
          </button>
          {/* Other Nav items can securely stay here */}
        </nav>

        <button onClick={handleLogout} className="mt-8 flex items-center justify-center space-x-2 w-full py-3 bg-red-500/20 text-red-400 rounded-xl hover:bg-red-500/30 transition-colors font-medium">
          <LogOut size={18} /> <span>Logout</span>
        </button>
      </motion.aside>

      {/* Main Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex-1 space-y-8"
      >
        {activeTab === "Dashboard" && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="glass p-6 rounded-2xl border-l-4 border-blue-500">
                <p className="text-foreground/60 text-sm font-medium mb-1">Total Students</p>
                <p className="text-3xl font-bold">1,245</p>
              </div>
              <div className="glass p-6 rounded-2xl border-l-4 border-green-500">
                <p className="text-foreground/60 text-sm font-medium mb-1">New Admissions</p>
                <p className="text-3xl font-bold">342</p>
              </div>
              <div className="glass p-6 rounded-2xl border-l-4 border-purple-500">
                <p className="text-foreground/60 text-sm font-medium mb-1">Active Courses</p>
                <p className="text-3xl font-bold">8</p>
              </div>
              <div className="glass p-6 rounded-2xl border-l-4 border-orange-500">
                <p className="text-foreground/60 text-sm font-medium mb-1">Pending Queries</p>
                <p className="text-3xl font-bold">14</p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-800">
              <h2 className="text-2xl font-bold mb-6">Recent Admission Applications</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-gray-100 dark:border-gray-800 text-sm text-foreground/60">
                      <th className="pb-4 font-medium">Applicant Name</th>
                      <th className="pb-4 font-medium">Applied Course</th>
                      <th className="pb-4 font-medium">Date</th>
                      <th className="pb-4 font-medium">Status</th>
                      <th className="pb-4 font-medium">Action</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {admissions.map((adm, idx) => (
                      <tr key={idx} className="border-b border-gray-50 dark:border-gray-800/50">
                        <td className="py-4 font-medium">{adm.fullName}</td>
                        <td className="py-4">{adm.courseOfInterest}</td>
                        <td className="py-4">{new Date(adm.createdAt).toLocaleDateString()}</td>
                        <td className="py-4">
                          <span className={`px-2 py-1 rounded text-xs font-bold ${adm.status === 'Approved' ? 'bg-green-100 text-green-600 dark:bg-green-900/30' : adm.status === 'Rejected' ? 'bg-red-100 text-red-600 dark:bg-red-900/30' : 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30'}`}>
                            {adm.status}
                          </span>
                        </td>
                        <td className="py-4 flex items-center gap-3">
                          <button className="text-primary-500 font-medium">Review</button>
                          <button 
                            onClick={() => handleDeleteAdmission(adm._id)}
                            className="text-red-500 hover:text-red-700 transition-colors"
                          >
                            <Trash2 size={18} />
                          </button>
                        </td>
                      </tr>
                    ))}
                    {admissions.length === 0 && (
                      <tr>
                        <td colSpan={5} className="py-4 text-center text-foreground/50">No applications found.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {activeTab === "Gallery Upload" && (
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-800">
            <h2 className="text-2xl font-bold mb-6 flex items-center space-x-2">
              <UploadCloud className="text-primary-500" />
              <span>Upload New Gallery Image</span>
            </h2>
            
            <form onSubmit={handleUpload} className="max-w-xl mx-auto space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Image Title</label>
                <input 
                  type="text" 
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary-500 outline-none" 
                  placeholder="e.g., Computer Lab Session 2026"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <select 
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary-500 outline-none"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="Campus">Campus & Facilities</option>
                  <option value="Events">Events & Cultural</option>
                  <option value="Labs">Labs & Academics</option>
                  <option value="Sports">Sports</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Select Image File</label>
                <div className="relative border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-8 text-center hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors">
                  <input 
                    type="file" 
                    accept="image/*"
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <UploadCloud className="mx-auto h-12 w-12 text-gray-400 mb-3" />
                  <p className="text-sm text-foreground/70">
                    {file ? file.name : "Drag & drop an image here, or click to browse"}
                  </p>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={uploading}
                className="w-full py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-lg font-bold text-lg flex items-center justify-center space-x-2 transition-all shadow-lg hover:shadow-primary-500/50 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {uploading ? (
                  <span>Uploading to Cloudinary...</span>
                ) : (
                  <span>Upload Image</span>
                )}
              </button>
            </form>
          </div>
        )}

        {activeTab === "Contact Messages" && (
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-800">
            <h2 className="text-2xl font-bold mb-6">Student Inquiries</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-100 dark:border-gray-800 text-sm text-foreground/60">
                    <th className="pb-4 font-medium">Name</th>
                    <th className="pb-4 font-medium">Subject</th>
                    <th className="pb-4 font-medium">Message</th>
                    <th className="pb-4 font-medium">Date</th>
                    <th className="pb-4 font-medium">Action</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {contacts.map((contact, idx) => (
                    <tr key={idx} className="border-b border-gray-50 dark:border-gray-800/50">
                      <td className="py-4 font-medium">
                        {contact.name}<br/>
                        <span className="text-xs text-foreground/50">{contact.email}</span>
                      </td>
                      <td className="py-4 font-medium">{contact.subject}</td>
                      <td className="py-4 max-w-xs truncate">{contact.message}</td>
                      <td className="py-4">{new Date(contact.createdAt).toLocaleDateString()}</td>
                      <td className="py-4">
                        <button 
                          onClick={() => handleDeleteContact(contact._id)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                  {contacts.length === 0 && (
                    <tr>
                      <td colSpan={4} className="py-4 text-center text-foreground/50">No messages found.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "Site Settings" && (
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-800">
            <h2 className="text-2xl font-bold mb-6 flex items-center space-x-2">
              <Settings className="text-primary-500" />
              <span>Update Site Information</span>
            </h2>
            
            <form onSubmit={handleUpdateSettings} className="space-y-6 max-w-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">College Name</label>
                  <input 
                    type="text" 
                    value={siteSettings.collegeName}
                    onChange={(e) => setSiteSettings({...siteSettings, collegeName: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-800 border-none outline-none" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Primary Phone</label>
                  <input 
                    type="text" 
                    value={siteSettings.phone}
                    onChange={(e) => setSiteSettings({...siteSettings, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-800 border-none outline-none" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">College Email</label>
                <input 
                  type="email" 
                  value={siteSettings.email}
                  onChange={(e) => setSiteSettings({...siteSettings, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-800 border-none outline-none" 
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Full Address</label>
                <textarea 
                  rows={3}
                  value={siteSettings.address}
                  onChange={(e) => setSiteSettings({...siteSettings, address: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-800 border-none outline-none" 
                ></textarea>
              </div>

              <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                <h3 className="font-bold mb-4">Social Media Links</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium mb-1">Instagram URL</label>
                    <input 
                      type="text" 
                      value={siteSettings.instagramUrl}
                      onChange={(e) => setSiteSettings({...siteSettings, instagramUrl: e.target.value})}
                      className="w-full px-3 py-2 rounded bg-gray-50 dark:bg-slate-800 border-none outline-none text-sm" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1">Facebook URL</label>
                    <input 
                      type="text" 
                      value={siteSettings.facebookUrl}
                      onChange={(e) => setSiteSettings({...siteSettings, facebookUrl: e.target.value})}
                      className="w-full px-3 py-2 rounded bg-gray-50 dark:bg-slate-800 border-none outline-none text-sm" 
                    />
                  </div>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isSavingSettings}
                className="w-full py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-bold transition-all disabled:opacity-50"
              >
                {isSavingSettings ? "Saving..." : "Save Changes"}
              </button>
            </form>
          </div>
        )}
      </motion.div>
    </main>
  );
}
