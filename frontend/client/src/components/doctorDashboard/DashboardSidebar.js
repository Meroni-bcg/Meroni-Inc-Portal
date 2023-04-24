//Import necessary dependencies from react and react-router-dom
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const sidebar = document.querySelector('.dashboard-sidebar');
const navLinks = sidebar.querySelectorAll('li');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    
    // Toggle active class on clicked link
    navLinks.forEach(link => link.classList.remove('active'));
    link.classList.add('active');
    
    // Show/hide content based on data-toggle attribute
    const toggleId = link.dataset.toggle;
    const content = document.querySelector(`#${toggleId}`);
    
    document.querySelectorAll('.content').forEach(c => c.style.display = 'none');
    content.style.display = 'block';
  });
});

