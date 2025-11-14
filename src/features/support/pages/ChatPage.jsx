import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdArrowBack, MdSend } from 'react-icons/md';
import { AppColors } from '../../../core/constants/colors.js';
import { AppDimensions } from '../../../core/constants/dimensions.js';
import { useResponsive } from '../../../core/utils/useResponsive.js';

const ChatPage = () => {
  const navigate = useNavigate();
  const { isMobile } = useResponsive();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello! How can I help you today?', sender: 'support', time: '10:30 AM' },
    { id: 2, text: 'I have a question about payments', sender: 'user', time: '10:31 AM' },
    { id: 3, text: 'Sure, I\'d be happy to help with that. What specifically would you like to know?', sender: 'support', time: '10:31 AM' },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    setMessages([...messages, { id: messages.length + 1, text: message, sender: 'user', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
    setMessage('');
    setTimeout(() => {
      setMessages(prev => [...prev, { id: prev.length + 1, text: 'Thank you for your message. A support agent will respond shortly.', sender: 'support', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
    }, 1000);
  };

  return (
    <div style={{ padding: isMobile ? AppDimensions.paddingM : AppDimensions.paddingL, height: 'calc(100vh - 100px)', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: AppDimensions.marginL }}>
        <button onClick={() => navigate('/support')} style={{ padding: '0.5rem', backgroundColor: AppColors.surface, border: `1px solid ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, cursor: 'pointer', display: 'flex', alignItems: 'center' }}><MdArrowBack size={20} /></button>
        <div>
          <h1 style={{ fontSize: isMobile ? '1.5rem' : '2rem', fontWeight: 'bold', color: AppColors.textPrimary, margin: 0 }}>Live Chat Support</h1>
          <p style={{ fontSize: '0.875rem', color: AppColors.success, margin: 0 }}>● Support Agent Online</p>
        </div>
      </div>

      <div style={{ flex: 1, backgroundColor: AppColors.surface, borderRadius: AppDimensions.radiusL, padding: AppDimensions.paddingL, boxShadow: `0 2px 8px ${AppColors.shadow}`, display: 'flex', flexDirection: 'column', maxWidth: '900px', margin: '0 auto', width: '100%' }}>
        <div style={{ flex: 1, overflowY: 'auto', marginBottom: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {messages.map(msg => (
            <div key={msg.id} style={{ display: 'flex', justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
              <div style={{ maxWidth: '70%' }}>
                <div style={{ padding: '0.75rem 1rem', backgroundColor: msg.sender === 'user' ? AppColors.primary : AppColors.backgroundDark, color: msg.sender === 'user' ? AppColors.surface : AppColors.textPrimary, borderRadius: AppDimensions.radiusM, wordWrap: 'break-word' }}>
                  {msg.text}
                </div>
                <p style={{ fontSize: '0.75rem', color: AppColors.textSecondary, margin: '0.25rem 0 0 0', textAlign: msg.sender === 'user' ? 'right' : 'left' }}>{msg.time}</p>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSend} style={{ display: 'flex', gap: '1rem', borderTop: `1px solid ${AppColors.divider}`, paddingTop: '1rem' }}>
          <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type your message..." style={{ flex: 1, padding: '0.75rem', border: `1px solid ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, fontSize: '1rem' }} />
          <button type="submit" style={{ backgroundColor: AppColors.primary, color: AppColors.surface, padding: '0.75rem 1.5rem', borderRadius: AppDimensions.radiusM, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem', fontWeight: '600' }}><MdSend size={20} />Send</button>
        </form>
      </div>
    </div>
  );
};

export default ChatPage;

