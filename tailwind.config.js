/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('https://images.pexels.com/photos/531756/pexels-photo-531756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2.jpg')",
      },
  },
  plugins: [],
}
}

.contenth-screen bg-custom-image bg-cover bg-center bg-repeat{
margin: 0;
  padding: 0;
  display: flex;
  justify-content: center; /* Centers the container horizontally */
  align-items: center; /* Centers the container vertically */
  height: 100vh; /* Full viewport height */
}

/* Video container */
.video-container {
  display: flex;
  justify-content: center; /* Centers the video inside the container */
  align-items: center;