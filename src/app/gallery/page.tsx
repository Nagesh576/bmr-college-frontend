"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface GalleryItem {
  _id: string;
  imageUrl: string;
  category: string;
  title: string;
}

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  const categories = ["All", "Campus", "Events", "Sports", "Labs"];

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
        const response = await fetch(`${API_URL}/data/gallery`);
        const data = await response.json();
        if (data && data.length > 0) {
          setGalleryItems(data);
        } else {
          setGalleryItems([]);
        }
      } catch (error) {
        console.error("Error fetching gallery images", error);
        setGalleryItems([]);
      } finally {
        setLoading(false);
      }
    };
    fetchGallery();
  }, []);

  const filteredItems = filter === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <main className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">
          Campus Gallery
        </h1>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          Take a glimpse into the vibrant campus life, modern infrastructure, and exciting events at B.M.R Degree College.
        </p>
      </motion.div>

      {/* Filter Buttons */}
      <motion.div 
        className="flex flex-wrap justify-center gap-3 mb-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              filter === cat 
                ? "bg-primary-500 text-white shadow-lg shadow-primary-500/30" 
                : "bg-white dark:bg-slate-800 text-foreground/70 hover:bg-primary-50 dark:hover:bg-slate-700 border border-gray-100 dark:border-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Loading State */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
        </div>
      ) : (
        /* Gallery Grid */
        filteredItems.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center p-16 bg-gray-50 dark:bg-slate-900 rounded-3xl border-2 border-dashed border-gray-200 dark:border-gray-800"
          >
            <p className="text-xl font-medium text-foreground/60 mb-2">No Gallery Images Found</p>
            <p className="text-foreground/40 text-center">Images will appear here once they are uploaded via the Admin Portal.</p>
          </motion.div>
        ) : (
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {filteredItems.map((item) => (
              <motion.div
                key={item._id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="group relative h-72 rounded-2xl overflow-hidden shadow-md bg-gray-200 dark:bg-slate-800"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.imageUrl})` }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white font-bold text-xl">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.category}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )
      )}
    </main>
  );
}
