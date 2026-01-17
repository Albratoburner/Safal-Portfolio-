# Portfolio Website

A modern, responsive portfolio website showcasing skills in AI, Machine Learning, Data Science, and Web Development.

## 🚀 Features

- **Responsive Design**: Optimized for all devices
- **Dark Theme**: Modern dark aesthetic with smooth animations
- **Interactive Elements**: Hover effects, smooth scrolling, and particle animations
- **Contact Form**: Functional contact form with AJAX submission
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with animations and responsive design
- **JavaScript**: Interactive features and form handling
- **Font Awesome**: Icons
- **Google Fonts**: Typography

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # Stylesheet
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🚀 Getting Started

### Prerequisites

- A web browser
- Git (for version control)
- GitHub account (for deployment)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Open in browser**
   - Open `index.html` in your web browser
   - Or use a local server:
     ```bash
     python3 -m http.server 8000
     ```
   - Visit `http://localhost:8000`

## 🔧 Customization

### Personal Information

Edit the following sections in `index.html`:

- **Hero Section**: Update name, title, and description
- **About Section**: Modify personal information and skills
- **Experience/Projects**: Update work history and project links
- **Contact**: Change contact information

### Styling

Modify `styles.css` to:
- Change color scheme
- Adjust animations
- Customize fonts
- Modify layout

### Form Configuration

Update the Formspree endpoint in `script.js`:
```javascript
fetch('https://formspree.io/f/your-form-id', {
```

## 🚀 Deployment

### GitHub Pages (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to GitHub Pages section
   - Select "Deploy from a branch"
   - Choose `main` branch and `/ (root)` folder
   - Save

3. **Access your site**
   - Your site will be available at `https://yourusername.github.io/portfolio`

### Other Hosting Options

- **Netlify**: Drag and drop the files or connect GitHub repo
- **Vercel**: Import from GitHub for automatic deployments
- **Firebase Hosting**: Use Firebase CLI for deployment

## 🤖 CI/CD Pipeline

This project includes a GitHub Actions workflow for automated deployment to GitHub Pages.

### Workflow Features

- **Automatic Deployment**: Deploys on every push to main branch
- **Build Check**: Validates HTML, CSS, and JS
- **SEO Check**: Runs basic SEO validation
- **Performance**: Checks for large files and optimization opportunities

### Setting up CI/CD

1. **Enable GitHub Pages** (as described above)

2. **The workflow file** (`.github/workflows/deploy.yml`) is automatically triggered

3. **Monitor deployments** in the Actions tab of your repository

### Workflow Details

The CI/CD pipeline:
1. Triggers on push to `main` branch
2. Sets up Node.js environment
3. Installs dependencies (if any)
4. Runs basic validation
5. Deploys to GitHub Pages

## 📊 Performance

- **Lighthouse Score**: 95+ (typical)
- **Load Time**: < 1 second
- **Mobile Friendly**: Fully responsive
- **SEO**: Optimized meta tags

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: safal.lohani@gmail.com
- **LinkedIn**: [Your LinkedIn Profile](https://www.linkedin.com/in/safal-lohani-1621bb318/)
- **GitHub**: [Your GitHub Profile](https://github.com/Albratoburner)

---

⭐ **Star this repo** if you found it helpful!