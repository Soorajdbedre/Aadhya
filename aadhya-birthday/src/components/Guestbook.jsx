import React, { useState, useEffect } from 'react';
import { ref, push, onValue, serverTimestamp } from 'firebase/database';
import { database } from '../firebase';
import { Send, Heart } from 'lucide-react';
import './Guestbook.css';

const Guestbook = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [comments, setComments] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const commentsRef = ref(database, 'comments');
    const unsubscribe = onValue(commentsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Convert object to array, sort by timestamp descending
        const commentsArray = Object.entries(data).map(([id, value]) => ({
          id,
          ...value
        })).sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
        setComments(commentsArray);
      } else {
        setComments([]);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);
    try {
      const commentsRef = ref(database, 'comments');
      await push(commentsRef, {
        name: name.trim(),
        message: message.trim(),
        timestamp: serverTimestamp()
      });
      setName('');
      setMessage('');
    } catch (error) {
      console.error("Error adding comment: ", error);
      alert("There was an error posting your comment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return 'Just now';
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <section className="section guestbook-section">
      <div className="container">
        <div className="guestbook-header animate-fade-in">
          <Heart size={32} className="text-terracotta mb-4 mx-auto block" />
          <h2 className="chapter-title text-center">Leave a Message</h2>
          <p className="chapter-description text-center max-w-2xl mx-auto">
            Share a memory, a wish, or just some love for Aadhya. These messages will stay here forever!
          </p>
        </div>

        <div className="guestbook-grid">
          <div className="guestbook-form-container glass-panel">
            <h3 className="form-title">Sign the Guestbook</h3>
            <form onSubmit={handleSubmit} className="guestbook-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Your best friend"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write something sweet..."
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : (
                  <>Send Love <Send size={18} /></>
                )}
              </button>
            </form>
          </div>

          <div className="comments-container">
            <h3 className="comments-title">Messages ({comments.length})</h3>
            <div className="comments-list">
              {comments.length === 0 ? (
                <p className="no-comments">Be the first to leave a message!</p>
              ) : (
                comments.map((comment) => (
                  <div key={comment.id} className="comment-card animate-fade-in">
                    <div className="comment-header">
                      <span className="comment-author">{comment.name}</span>
                      <span className="comment-date">{formatDate(comment.timestamp)}</span>
                    </div>
                    <p className="comment-text">{comment.message}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guestbook;
