module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        // Mapping your CSS variables to Tailwind names
        primary: "var(--primary)",
        "primary-hover": "var(--primary-hover)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        "text-main": "var(--text-main)",
        "text-muted": "var(--text-muted)",
      },
      backgroundColor: {
        glass: "var(--bg-glass)",
      },
      borderRadius: {
        custom: "var(--radius)",
      },
       boxShadow: {
        'custom': '0 9px 18px rgba(0,0,0,0.12)',
      }
    },
  },
  plugins: [],
};



