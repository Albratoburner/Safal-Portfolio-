# 🎨 Safal Lohani - Portfolio

[![Deploy to GitHub Pages](https://github.com/Albratoburner/Safal-Portfolio-/actions/workflows/deploy.yml/badge.svg)](https://github.com/Albratoburner/Safal-Portfolio-/actions/workflows/deploy.yml)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-2ea44f)](https://albratoburner.github.io/Safal-Portfolio-/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> A modern, responsive portfolio website showcasing expertise in AI, Machine Learning, Data Science, and Full-Stack Development.

![Portfolio Preview](./preview.png)

## ✨ Features

### 🎯 Core Features
- **🚀 Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **🌙 Dark Theme** - Modern dark aesthetic with smooth animations
- **⚡ Fast Performance** - Lightweight, optimized for speed
- **📱 Mobile-First** - Progressive enhancement approach
- **♿ Accessibility** - WCAG compliant with proper ARIA labels

### 🎨 Interactive Elements
- **Hover Effects** - Smooth CSS transitions and transforms
- **Particle Animation** - Dynamic background particles
- **Smooth Scrolling** - Native CSS smooth scrolling
- **Typing Effect** - Animated text in hero section
- **Form Validation** - Real-time contact form validation

### 🔧 Technical Features
- **AJAX Contact Form** - No page refresh form submission
- **SEO Optimized** - Meta tags, semantic HTML, Open Graph
- **Progressive Web App** - Service worker ready
- **Cross-browser Support** - Modern browser compatibility

## 🛠️ Tech Stack

### Frontend
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

### Tools & Libraries
![Font Awesome](https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white)
![Google Fonts](https://img.shields.io/badge/Google_Fonts-4285F4?style=for-the-badge&logo=google&logoColor=white)

### DevOps & Deployment
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=githubpages&logoColor=white)

## 📁 Project Structure

```
portfolio/
├── 📄 index.html              # Main HTML structure
├── 🎨 styles.css              # Custom CSS styles
├── ⚡ script.js               # Interactive JavaScript
├── 📦 package.json            # Project dependencies
├── 🚫 .gitignore              # Git ignore rules
├── 📖 README.md               # Project documentation
└── 🤖 .github/
    └── ⚙️ workflows/
        └── 🚀 deploy.yml      # CI/CD pipeline
```

## 🚀 Quick Start

### Prerequisites
- 🌐 Modern web browser (Chrome, Firefox, Safari, Edge)
- 🐙 Git for version control
- 📧 GitHub account for deployment

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Albratoburner/Safal-Portfolio-.git
   cd Safal-Portfolio-
   ```

2. **Start development server**
   ```bash
   # Using Python (built-in)
   python3 -m http.server 8000

   # Or using Node.js (if available)
   npx serve .

   # Or using PHP (if available)
   php -S localhost:8000
   ```

3. **Open in browser**
   ```
   http://localhost:8000
   ```

## 🎨 Customization Guide

### Personal Information
Edit `index.html` to update:
- **Hero Section** - Name, title, and tagline
- **About Section** - Personal bio and background
- **Skills Section** - Technical skills and expertise
- **Experience** - Work history and projects
- **Contact Info** - Email, phone, social links

### Styling & Theme
Modify `styles.css` for:
- **Color Scheme** - Update CSS custom properties
- **Typography** - Change fonts and sizes
- **Animations** - Adjust timing and effects
- **Layout** - Modify grid and flexbox layouts

### Form Configuration
Update contact form in `script.js`:
```javascript
// Replace with your Formspree endpoint
fetch('https://formspree.io/f/your-form-id', {
  method: 'POST',
  body: formData,
  headers: { 'Accept': 'application/json' }
});
```

## 🚀 Deployment

### GitHub Pages (Automated)

1. **Fork & Clone** this repository
2. **Make your changes** and customize content
3. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Customize portfolio"
   git push origin main
   ```

4. **Enable GitHub Pages**
   - Go to **Settings** → **Pages**
   - Select **"GitHub Actions"** as source
   - Wait for deployment (usually 2-3 minutes)

5. **Access your site** at `https://yourusername.github.io/repository-name/`

### Alternative Hosting

| Platform | Method | Setup Time |
|----------|--------|------------|
| **Netlify** | Drag & drop or Git import | 2 minutes |
| **Vercel** | Git import | 1 minute |
| **Firebase** | CLI deployment | 5 minutes |
| **AWS S3** | Static hosting | 10 minutes |

## 🤖 CI/CD Pipeline

### Automated Workflow
- **Trigger**: Push to `main` branch
- **Build**: File validation and optimization
- **Deploy**: Automatic GitHub Pages deployment
- **Monitor**: Real-time deployment status

### Workflow Steps
1. 📥 **Code Checkout** - Fetch latest changes
2. 🔍 **File Analysis** - Check sizes and structure
3. 📦 **Artifact Creation** - Prepare deployment package
4. 🚀 **Pages Deployment** - Publish to GitHub Pages

### Manual Triggers
- Go to **Actions** tab → **"Deploy to GitHub Pages"**
- Click **"Run workflow"** for manual deployment

## 📊 Performance Metrics

| Metric | Score | Target |
|--------|-------|--------|
| **Lighthouse Performance** | 95+ | >90 |
| **Lighthouse Accessibility** | 100 | 100 |
| **Lighthouse SEO** | 95+ | >90 |
| **Load Time** | <1s | <2s |
| **Bundle Size** | <100KB | <200KB |

## 🌍 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

We welcome contributions! Here's how to get started:

### Development Workflow
1. **Fork** the repository
2. **Create** a feature branch
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make changes** and test locally
4. **Commit** with descriptive messages
   ```bash
   git commit -m "Add: amazing new feature"
   ```
5. **Push** to your fork
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open** a Pull Request

### Guidelines
- 📝 Follow conventional commit format
- 🧪 Test changes locally
- 📱 Ensure mobile responsiveness
- ♿ Maintain accessibility standards
- 📖 Update documentation

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License - feel free to use this project for personal or commercial purposes.
Just keep the original license and attribution.
```

## 📞 Contact & Support

### Get In Touch
- **📧 Email**: safal.lohani@gmail.com
- **💼 LinkedIn**: [Safal Lohani](https://www.linkedin.com/in/safal-lohani-1621bb318/)
- **🐙 GitHub**: [@Albratoburner](https://github.com/Albratoburner)
- **📱 Phone**: +977 9863486935

### Support
- 🐛 **Bug Reports**: [Issues](https://github.com/Albratoburner/Safal-Portfolio-/issues)
- 💡 **Feature Requests**: [Discussions](https://github.com/Albratoburner/Safal-Portfolio-/discussions)
- 📖 **Documentation**: [Wiki](https://github.com/Albratoburner/Safal-Portfolio-/wiki)

## 🙏 Acknowledgments

- **Icons**: [Font Awesome](https://fontawesome.com/)
- **Fonts**: [Google Fonts](https://fonts.google.com/)
- **Hosting**: [GitHub Pages](https://pages.github.com/)
- **CI/CD**: [GitHub Actions](https://github.com/features/actions)

## 📈 Project Stats

![GitHub stars](https://img.shields.io/github/stars/Albratoburner/Safal-Portfolio-.svg?style=social)
![GitHub forks](https://img.shields.io/github/forks/Albratoburner/Safal-Portfolio-.svg?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/Albratoburner/Safal-Portfolio-.svg?style=social)

---

<div align="center">

**Made with ❤️ by [Safal Lohani](https://github.com/Albratoburner)**

⭐ **Star this repo** if you found it helpful!

[🌐 Live Demo](https://albratoburner.github.io/Safal-Portfolio-/) • [📧 Contact Me](mailto:safal.lohani@gmail.com)

</div>