import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Secure System",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "Luka's expertise and dedication transformed our website into a stunning and functional platform. His ability to understand our needs and deliver beyond expectations was remarkable. Highly recommend Luka for any development project.",
    name: "Sarah Thompson",
    title: "CEO of BrightPath Solutions",
    src: "https://media.istockphoto.com/id/1444490810/photo/confident-businesswoman-in-modern-office.jpg?s=612x612&w=0&k=20&c=9eRJr0051v497YAvCffJLxFUcBeHC5s5Pe3klt2bUQQ=",
  },
  {
    quote:
      "Working with Luka was a game-changer for our brand. His innovative ideas and flawless execution made our website stand out in a competitive market. Luka's attention to detail is unmatched.",
    name: "James Anderson",
    title: "Marketing Director at BlueWave Digital",
    src: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    quote:
      "Luka's professionalism and creativity were evident from day one. He delivered a website that perfectly captured our vision. We couldn't have asked for a better partner for our project.",
    name: "Emily Carter",
    title: "Founder of GreenLeaf Wellness",
    src: "https://static.vecteezy.com/system/resources/previews/033/168/347/non_2x/an-attractive-african-american-business-woman-smiling-ai-generative-free-photo.jpg",
  },
  {
    quote:
      "Luka is a rare find in the development world. His technical skills combined with his ability to communicate complex ideas made the entire process seamless and enjoyable. We're thrilled with the results!",
    name: "David Wilson",
    title: "CTO of InnovateX Labs",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/640px-Outdoors-man-portrait_%28cropped%29.jpg",
  },
  {
    quote:
      "I can't recommend Luka enough. His dedication to our project, quick turnaround time, and exceptional skills made all the difference. Our new website has already received fantastic feedback from our clients.",
    name: "Sophia Martinez",
    title: "Creative Director at Visionary Studios",
    src: "https://d28wu8o6itv89t.cloudfront.net/images/RoshniNadarjpg-1709202883648.jpeg",
  },
  {
    quote:
      "Luka went above and beyond to ensure our website was not only visually appealing but also highly functional. His innovative approach and problem-solving skills were key to the project's success.",
    name: "Benjamin Scott",
    title: "Product Manager at NextGen Enterprises",
    src: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL3Jhd3BpeGVsb2ZmaWNlMTFfcGhvdG9fb2ZfYWZyaWNhbl9hbWVyaWNhbl9tYW5faW5fYnVzaW5lc3Nfc3VpdF9iYmEzZjA3MS1iN2JkLTQ3MjctODA4MC1hYjJmOTIxOGY1OTMucG5n.png",
  },
  {
    quote:
      "I had the pleasure of working with Luka on a complex project, and he exceeded all my expectations. His professionalism, expertise, and ability to adapt to challenges were invaluable.",
    name: "Olivia Walker",
    title: "Operations Manager at Streamline Solutions",
    src: "https://st2.depositphotos.com/1715570/5634/i/450/depositphotos_56347297-stock-photo-beautiful-young-black-woman-smiling.jpg",
  },
  {
    quote:
      "Luka's work is truly exceptional. He transformed our outdated website into a modern masterpiece. His creative vision and technical expertise made all the difference. We'll definitely work with him again.",
    name: "Daniel King",
    title: "Owner of King's Consulting",
    src: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8fHww",
  },
  {
    quote:
      "From the very start, Luka impressed us with his deep understanding of web development. He delivered a sleek, responsive website that perfectly met our requirements. He's a true professional!",
    name: "Grace Parker",
    title: "Founder of Bloom Digital Marketing",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS7AiWKSLuNFQqtHEKxq6OgdTQYctWcUXR4g&s",
  },
  {
    quote:
      "Luka's ability to combine technical expertise with a client-focused approach is unparalleled. He delivered a website that has significantly boosted our online presence and business performance.",
    name: "Henry Evans",
    title: "Managing Director at Peak Performance Inc.",
    src: "https://thumbs.dreamstime.com/b/young-indian-man-happy-outdoors-looking-camera-39595562.jpg",
  },
];



export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
