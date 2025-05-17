export const DATA = {
  meta: {
    title: "AWS User Group Yaoundé",
    favicon: "/favicon.ico",
    theme: {
      colors: {
        primary: "#232F3E",
        secondary: "#FF9900"
      }
    }
  },
  navigation: {
    logo: {
      icon: "ri-cloud-line",
      text: "AWS User Group Yaoundé"
    },
    links: [
      { id: "home", label: "Home", href: "#home" },
      { id: "about", label: "About", href: "#about" },
      { id: "events", label: "Events", href: "#events" },
      { id: "team", label: "Team", href: "#team" },
      { id: "contact", label: "Contact", href: "#contact" }
    ]
  },
  hero: {
    title: "AWS User Group Yaoundé",
    subtitle: "Join Cameroon's premier cloud computing community. Learn, share, and grow with fellow AWS enthusiasts.",
    backgroundImage: "/background.jpg",
    buttons: [
      {
        text: "Register for Next Event",
        type: "primary",
        href: "#"
      },
      {
        text: "Join Our Community",
        type: "secondary",
        href: "https://linktr.ee/awsugyde"
      }
    ],
    countdown: {
      targetDate: "May 30, 2025 18:00:00",
      items: [
        { id: "days", label: "Days" },
        { id: "hours", label: "Hours" },
        { id: "minutes", label: "Minutes" },
        { id: "seconds", label: "Seconds" }
      ]
    }
  },
  about: {
    title: "About Our Community",
    subtitle: "We're a community-led group focused on Amazon Web Services technology, bringing together professionals, developers, architects, and enthusiasts in Yaoundé and beyond.",
    mission: {
      title: "Our Mission",
      description: "To foster a vibrant community of AWS users in Yaoundé, providing a platform for knowledge sharing, networking, and professional growth. We aim to accelerate cloud adoption and innovation in Cameroon through regular meetups, workshops, and collaborative learning."
    },
    coreValues: {
      title: "Core Values",
      values: [
        {
          icon: "ri-group-line",
          title: "Community First",
          description: "We prioritize building a supportive, inclusive community where everyone feels welcome and valued."
        },
        {
          icon: "ri-lightbulb-line",
          title: "Knowledge Sharing",
          description: "We believe in openly sharing expertise, experiences, and best practices to elevate everyone's skills."
        },
        {
          icon: "ri-rocket-line",
          title: "Innovation",
          description: "We encourage experimentation, creative problem-solving, and pushing the boundaries of what's possible with AWS."
        }
      ]
    },
    benefits: {
      title: "Benefits of Joining",
      items: [
        {
          icon: "ri-user-voice-line",
          title: "Networking",
          description: "Connect with local AWS professionals and build valuable relationships."
        },
        {
          icon: "ri-book-open-line",
          title: "Learning",
          description: "Access workshops, tutorials, and hands-on labs to enhance your AWS skills."
        },
        {
          icon: "ri-briefcase-line",
          title: "Career Growth",
          description: "Discover job opportunities and advance your career in cloud computing."
        },
        {
          icon: "ri-award-line",
          title: "Recognition",
          description: "Showcase your expertise through speaking opportunities and community contributions."
        }
      ]
    }
  },
  events: {
    title: "Our Events",
    subtitle: "Join us for regular meetups, workshops, and special events to learn, connect, and grow your AWS skills.",
    tabs: [
      { id: "upcoming", label: "Upcoming Events" },
      { id: "past", label: "Past Events" }
    ],
    upcoming: [
      {
        id: 1,
        title: "AWS Serverless Architecture Workshop",
        date: "May 30, 2025",
        time: "6:00 PM - 8:30 PM",
        location: "Tech Hub Yaoundé, Bastos District",
        speaker: "Emmanuel Nkwenti, AWS Solutions Architect",
        image: "https://readdy.ai/api/search-image?query=A%20professional%20AWS%20workshop%20setting%20with%20developers%20and%20cloud%20architects%20collaborating%2C%20modern%20tech%20environment%2C%20projector%20screen%20showing%20AWS%20architecture%20diagrams%2C%20diverse%20group%20of%20attendees&width=600&height=400&seq=124&orientation=landscape",
        ctaText: "Register Now"
      },
      {
        id: 2,
        title: "Cloud Security Best Practices",
        date: "June 15, 2025",
        time: "5:30 PM - 7:30 PM",
        location: "Digital Innovation Center, Mvan",
        speaker: "Olivia Mbarga, Security Specialist",
        image: "https://readdy.ai/api/search-image?query=A%20modern%20tech%20conference%20room%20with%20AWS%20branding%2C%20people%20networking%20and%20discussing%20cloud%20technologies%2C%20professional%20atmosphere%2C%20presentation%20setup%2C%20diverse%20attendees&width=600&height=400&seq=125&orientation=landscape",
        ctaText: "Register Now"
      },
      {
        id: 3,
        title: "AWS Community Hackathon",
        date: "July 8-9, 2025",
        time: "9:00 AM - 6:00 PM (Both days)",
        location: "Yaoundé Innovation Hub, Omnisports",
        prize: "Prizes worth over 1,000,000 XAF",
        image: "https://readdy.ai/api/search-image?query=A%20hackathon%20event%20with%20developers%20working%20on%20AWS%20projects%2C%20collaborative%20coding%20environment%2C%20multiple%20screens%20showing%20cloud%20architectures%2C%20energetic%20atmosphere%2C%20diverse%20participants&width=600&height=400&seq=126&orientation=landscape",
        ctaText: "Register Team"
      }
    ],
    past: [
      {
        id: 4,
        title: "Getting Started with Amazon EKS",
        date: "April 12, 2025",
        location: "Tech Hub Yaoundé",
        speaker: "Jean-Paul Essono",
        image: "https://readdy.ai/api/search-image?query=A%20completed%20AWS%20workshop%20with%20participants%20engaged%20in%20discussion%2C%20presenter%20at%20front%20with%20AWS%20slides%2C%20professional%20tech%20environment%2C%20diverse%20audience&width=600&height=400&seq=127&orientation=landscape",
        ctaText: "View Recap"
      },
      {
        id: 5,
        title: "Cloud Migration Strategies",
        date: "March 25, 2025",
        location: "Digital Innovation Center",
        speaker: "Marie Atangana",
        image: "https://readdy.ai/api/search-image?query=A%20cloud%20migration%20workshop%20with%20IT%20professionals%20discussing%20AWS%20migration%20strategies%2C%20presentation%20slides%20showing%20migration%20paths%2C%20collaborative%20environment%2C%20diverse%20group&width=600&height=400&seq=128&orientation=landscape",
        ctaText: "View Recap"
      },
      {
        id: 6,
        title: "AWS Community Networking Mixer",
        date: "February 18, 2025",
        location: "Canal Olympia, Warda",
        attendees: "45+ Attendees",
        image: "https://readdy.ai/api/search-image?query=An%20AWS%20networking%20event%20with%20professionals%20exchanging%20business%20cards%2C%20casual%20networking%20atmosphere%2C%20AWS%20branding%20visible%2C%20diverse%20attendees%20in%20business%20casual%20attire&width=600&height=400&seq=129&orientation=landscape",
        ctaText: "View Photos"
      }
    ]
  },
  team: {
    title: "Meet Our Team",
    subtitle: "Our dedicated team of AWS enthusiasts who volunteer their time to build and nurture our community.",
    members: [
      {
        id: 1,
        name: "Paula Kamga",
        role: "Community Lead",
        bio: "AWS Certified Solutions Architect with 8+ years of experience in cloud infrastructure.",
        image: "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20an%20African%20man%20in%20his%2030s%20with%20short%20hair%20and%20glasses%2C%20wearing%20business%20casual%20attire%2C%20friendly%20smile%2C%20neutral%20background%2C%20high%20quality%20portrait&width=300&height=300&seq=130&orientation=squarish",
        social: [
          { platform: "linkedin", icon: "ri-linkedin-fill", url: "#" },
          { platform: "twitter", icon: "ri-twitter-x-fill", url: "#" },
          { platform: "github", icon: "ri-github-fill", url: "#" }
        ]
      },
      {
        id: 2,
        name: "Chi Che",
        role: "Technical Coordinator",
        bio: "DevOps engineer specializing in AWS automation and CI/CD pipelines.",
        image: "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20an%20African%20woman%20in%20her%20late%2020s%20with%20natural%20hair%2C%20wearing%20professional%20attire%2C%20warm%20smile%2C%20neutral%20background%2C%20high%20quality%20portrait&width=300&height=300&seq=131&orientation=squarish",
        social: [
          { platform: "linkedin", icon: "ri-linkedin-fill", url: "#" },
          { platform: "twitter", icon: "ri-twitter-x-fill", url: "#" },
          { platform: "github", icon: "ri-github-fill", url: "#" }
        ]
      },
      {
        id: 3,
        name: "Fabrice Moukam",
        role: "Events Manager",
        bio: "Community builder with expertise in organizing tech events and workshops.",
        image: "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20young%20African%20man%20in%20his%20mid-20s%20with%20short%20hair%2C%20wearing%20smart%20casual%20attire%2C%20confident%20smile%2C%20neutral%20background%2C%20high%20quality%20portrait&width=300&height=300&seq=132&orientation=squarish",
        social: [
          { platform: "linkedin", icon: "ri-linkedin-fill", url: "#" },
          { platform: "twitter", icon: "ri-twitter-x-fill", url: "#" },
          { platform: "github", icon: "ri-github-fill", url: "#" }
        ]
      },
      {
        id: 4,
        name: "Christelle Nana",
        role: "Content Creator",
        bio: "Digital marketer and content specialist focused on cloud technology education.",
        image: "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20an%20African%20woman%20in%20her%2030s%20with%20braided%20hair%2C%20wearing%20business%20attire%2C%20friendly%20expression%2C%20neutral%20background%2C%20high%20quality%20portrait&width=300&height=300&seq=133&orientation=squarish",
        social: [
          { platform: "linkedin", icon: "ri-linkedin-fill", url: "#" },
          { platform: "twitter", icon: "ri-twitter-x-fill", url: "#" },
          { platform: "instagram", icon: "ri-instagram-fill", url: "#" }
        ]
      },
      {
        id: 5,
        name: "Robert Fouda",
        role: "Industry Advisor",
        bio: "IT Director with extensive experience implementing AWS solutions in enterprise environments.",
        image: "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20an%20African%20man%20in%20his%2040s%20with%20short%20salt%20and%20pepper%20hair%2C%20wearing%20business%20attire%2C%20serious%20professional%20expression%2C%20neutral%20background%2C%20high%20quality%20portrait&width=300&height=300&seq=134&orientation=squarish",
        social: [
          { platform: "linkedin", icon: "ri-linkedin-fill", url: "#" },
          { platform: "twitter", icon: "ri-twitter-x-fill", url: "#" },
          { platform: "website", icon: "ri-global-line", url: "#" }
        ]
      }
    ]
  },
  activities: {
    title: "Our Activities",
    subtitle: "Explore the various activities we organize to help our community learn and grow with AWS.",
    categories: [
      {
        id: 1,
        icon: "ri-presentation-line",
        title: "Monthly Meetups",
        description: "Regular gatherings featuring technical presentations, demos, and networking opportunities."
      },
      {
        id: 2,
        icon: "ri-tools-line",
        title: "Hands-on Workshops",
        description: "Practical sessions where you can build real-world solutions using AWS services."
      },
      {
        id: 3,
        icon: "ri-code-box-line",
        title: "Hackathons",
        description: "Competitive events where teams build innovative solutions using AWS technologies."
      },
      {
        id: 4,
        icon: "ri-graduation-cap-line",
        title: "Study Groups",
        description: "Collaborative learning sessions focused on AWS certification preparation and skill development."
      }
    ],
    communityImpact: {
      title: "Community Impact",
      description: "Since our founding in 2023, the AWS User Group Yaoundé has:",
      achievements: [
        "Organized over 25 technical events",
        "Built a community of 500+ cloud enthusiasts",
        "Helped 75+ members achieve AWS certifications",
        "Partnered with 12 local tech companies"
      ],
      image: "https://readdy.ai/api/search-image?query=A%20collage%20of%20AWS%20community%20activities%20showing%20workshops%2C%20networking%20events%2C%20and%20presentations%2C%20diverse%20group%20of%20participants%20engaged%20in%20cloud%20computing%20learning%2C%20professional%20tech%20environment&width=800&height=400&seq=135&orientation=landscape",
      ctaText: "Join Our Community"
    },
    upcomingActivities: {
      title: "Upcoming Activities",
      events: [
        {
          id: 1,
          title: "AWS re:Invent Recap",
          date: "May 30, 2025",
          time: "6:00 PM",
          location: "Tech Hub Yaoundé"
        },
        {
          id: 2,
          title: "Cloud Security Workshop",
          date: "June 15, 2025",
          time: "5:30 PM",
          location: "Digital Innovation Center"
        },
        {
          id: 3,
          title: "AWS Community Hackathon",
          date: "July 8-9, 2025",
          time: "9:00 AM",
          location: "Yaoundé Innovation Hub"
        },
        {
          id: 4,
          title: "AWS Certification Study Group",
          schedule: "Weekly • Thursdays",
          time: "7:00 PM",
          location: "Online via Zoom"
        }
      ],
      ctaText: "View All Activities"
    }
  },
  contact: {
    title: "Get In Touch",
    subtitle: "Have questions or want to get involved? We'd love to hear from you!",
    form: {
      fields: [
        { id: "name", type: "text", label: "Your Name", placeholder: "Enter your name" },
        { id: "email", type: "email", label: "Email Address", placeholder: "Enter your email" },
        { id: "subject", type: "text", label: "Subject", placeholder: "What is this about?" },
        { id: "message", type: "textarea", label: "Message", placeholder: "Your message here..." }
      ],
      checkbox: {
        id: "subscribe",
        label: "Subscribe to our newsletter to receive updates about upcoming events and activities"
      },
      submitText: "Send Message"
    },
    info: {
      title: "Contact Information",
      items: [
        {
          icon: "ri-mail-line",
          title: "Email",
          content: "info@awsusergroupyaounde.com"
        },
        {
          icon: "ri-map-pin-line",
          title: "Meet Us",
          content: "Tech Hub Yaoundé, Bastos District\nYaoundé, Cameroon"
        },
        {
          icon: "ri-community-line",
          title: "Community",
          content: "Join our Slack workspace for discussions and updates"
        }
      ],
      social: [
        { platform: "twitter", icon: "ri-twitter-x-fill", url: "#" },
        { platform: "linkedin", icon: "ri-linkedin-fill", url: "#" },
        { platform: "facebook", icon: "ri-facebook-fill", url: "#" },
        { platform: "instagram", icon: "ri-instagram-fill", url: "#" },
        { platform: "github", icon: "ri-github-fill", url: "#" }
      ],
      newsletter: {
        title: "Newsletter",
        description: "Stay updated with our monthly newsletter.",
        inputPlaceholder: "Your email address",
        buttonText: "Subscribe"
      }
    }
  },
  footer: {
    logo: {
      icon: "ri-cloud-line",
      text: "AWS User Group\nYaoundé"
    },
    description: "A community-led group for Amazon Web Services users in Yaoundé, Cameroon.",
    links: {
      quickLinks: {
        title: "Quick Links",
        items: [
          { label: "Home", href: "#home" },
          { label: "About Us", href: "#about" },
          { label: "Events", href: "#events" },
          { label: "Our Team", href: "#team" },
          { label: "Contact", href: "#contact" }
        ]
      },
      resources: {
        title: "Resources",
        items: [
          { label: "AWS Documentation", href: "#" },
          { label: "AWS Training", href: "#" },
          { label: "AWS Certifications", href: "#" },
          { label: "Community Blog", href: "#" },
          { label: "FAQ", href: "#" }
        ]
      },
      legal: {
        title: "Legal",
        items: [
          { label: "Privacy Policy", href: "#" },
          { label: "Terms of Service", href: "#" },
          { label: "Code of Conduct", href: "#" }
        ]
      }
    },
    copyright: "© 2025 AWS User Group Yaoundé. All rights reserved.",
    social: [
      { platform: "twitter", icon: "ri-twitter-x-fill", url: "#" },
      { platform: "linkedin", icon: "ri-linkedin-fill", url: "#" },
      { platform: "facebook", icon: "ri-facebook-fill", url: "#" },
      { platform: "instagram", icon: "ri-instagram-fill", url: "#" },
      { platform: "github", icon: "ri-github-fill", url: "#" }
    ]
  }
};