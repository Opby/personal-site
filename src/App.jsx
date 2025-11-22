import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Code, 
  Award, 
  Globe, 
  Mail, 
  Github, 
  ExternalLink, 
  ChevronDown, 
  Menu, 
  X,
  School,
  Microscope,
  Users,
  Cpu,
  Calendar,
  Heart,
  Mic,
  TrendingUp,
  FileText,
  Youtube
} from 'lucide-react';

const Navigation = ({ activeSection, scrollToSection, mobileMenuOpen, setMobileMenuOpen }) => {
  const navItems = [
    { id: 'about', label: 'Academics' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'research', label: 'Research' },
    { id: 'honors', label: 'Honors' },
    { id: 'innovation', label: 'Innovation' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm text-white z-50 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 font-bold text-xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 cursor-pointer" onClick={() => scrollToSection('hero')}>
            ISAAC HE
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                    activeSection === item.id
                      ? 'text-blue-400 bg-slate-800'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <a 
                href="mailto:isaache64@gmail.com" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all shadow-lg shadow-blue-900/20"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const SectionTitle = ({ icon: Icon, title, subtitle }) => (
  <div className="mb-12 text-center">
    <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-xl mb-4">
      <Icon className="w-8 h-8 text-blue-500" />
    </div>
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
    <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-4"></div>
    {subtitle && <p className="text-slate-600 max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-xl shadow-sm hover:shadow-md border border-slate-100 overflow-hidden transition-all duration-300 ${className}`}>
    {children}
  </div>
);

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'leadership', 'research', 'honors', 'innovation'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= -200 && rect.top <= 400) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100">
      <Navigation 
        activeSection={activeSection} 
        scrollToSection={scrollToSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-slate-900">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-slate-900 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center sm:px-6 lg:px-8">
          
          {/* Profile Picture Added Here */}
          <div className="mb-8 relative mx-auto w-fit group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 blur-xl opacity-30 rounded-full group-hover:opacity-50 transition-opacity duration-500"></div>
            <img 
              src="https://media.licdn.com/dms/image/v2/D5603AQEy4GyMYUIacQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719432676422?e=1765411200&v=beta&t=aLT76orhWdPF7Gza7ATF68DgtQmRCB7RLSuriPyFpcQ" 
              alt="Isaac He Profile" 
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-slate-800 shadow-2xl mx-auto"
            />
          </div>

          <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium mb-8 animate-fade-in-up">
            Student • Researcher • Innovator
          </div>
          
          {/* Updated Headline to Highlight Education - Smaller Font & 2 Lines */}
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
            Bridging <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">History</span> & 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300"> Technology</span> <br />
            to Transform <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-300">Education</span>
          </h1>
          <p className="mt-4 text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
            My mission is to make history and cultural education accessible for youth around the world using the latest AI and hardware technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={() => scrollToSection('about')} className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white border border-slate-700 rounded-lg font-semibold transition-all flex items-center justify-center gap-2">
              <Users size={20} /> My Academic Story
            </button>
            <button onClick={() => scrollToSection('research')} className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-semibold transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2">
              <Microscope size={20} /> My Research
            </button>
            <button onClick={() => scrollToSection('innovation')} className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-semibold transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2">
              <Microscope size={20} /> My Innovations
            </button>
          </div>

          <div className="mt-16 flex justify-center gap-8 text-slate-400">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-white">1580</span>
              <span className="text-sm">SAT Score</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-white">4.92</span>
              <span className="text-sm">GPA</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-white">8+</span>
              <span className="text-sm">Innovations</span>
            </div>
          </div>

        </div>
      </section>

      {/* About & Education */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionTitle 
          icon={BookOpen} 
          title="Education & Development" 
          subtitle="A foundation of academic rigor complemented by world-class summer programs."
        />

        <div className="flex flex-col gap-16">
          {/* Academic Journey - Top Section */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3 border-b border-slate-200 pb-4">
              <School className="text-blue-500 w-6 h-6" /> Academic Journey
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  school: "The Quarry Lane School",
                  logo: "https://upload.wikimedia.org/wikipedia/en/a/a3/The_Quarry_Lane_School_%28crest%29.png", 
                  role: "High School Student",
                  period: "Aug 2023 - Present",
                  gpa: "GPA: 4.92/4.0",
                  highlight: "IB Diploma Student, highest rigor"
                },
                {
                  school: "Mission San Jose High School",
                  logo: "https://media.licdn.com/dms/image/v2/C4E0BAQF1DuwVwwhx9w/company-logo_200_200/company-logo_200_200/0/1630573142445?e=2147483647&v=beta&t=hjqGMxzk-B52sD8XrMwtSuRGh-chT1ak_iIGGAndYvw",
                  role: "High School Student",
                  period: "Aug 2022 - June 2023",
                  gpa: "GPA: 4.0/4.0",
                  highlight: "Completed Freshman Year with 4.0 GPA"
                }
              ].map((edu, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-blue-200 transition-all hover:shadow-md group">
                  <div className="flex flex-col sm:flex-row items-start gap-6">
                    {/* Logo Section - Now side-by-side */}
                    <div className="flex-shrink-0 w-20 h-20 bg-slate-50 rounded-lg p-2 flex items-center justify-center border border-slate-100">
                      <img 
                        src={edu.logo} 
                        alt={`${edu.school} logo`}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://ui-avatars.com/api/?name=" + edu.school.replace(/ /g, '+') + "&background=random";
                        }}
                      />
                    </div>
                    
                    {/* Content Section */}
                    <div className="flex-grow">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                        <h4 className="text-lg font-bold text-slate-900 leading-tight">{edu.school}</h4>
                        <span className="text-xs font-bold px-2 py-1 bg-blue-50 text-blue-600 rounded-full whitespace-nowrap mt-2 sm:mt-0 w-fit">{edu.period}</span>
                      </div>
                      <p className="text-blue-600 font-medium text-sm mb-3">{edu.role} • {edu.gpa}</p>
                      {edu.highlight && <p className="text-slate-600 text-sm leading-relaxed">{edu.highlight}</p>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summer Institutes - Bottom Grid Section */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3 border-b border-slate-200 pb-4">
              <Globe className="text-purple-500 w-6 h-6" /> Summer Institutes & Programs
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { 
                  name: "UPenn M&TSI", 
                  desc: "Rigorous for-credit program integrating technology and management principles, taught by full-time Wharton and Engineering faculty.", 
                  date: "July 2025" 
                },
                { 
                  name: "Stanford Humanities Institute", 
                  desc: "Intensive graduate-level seminars led by Stanford professors, exploring complex topics in racial identity and the American imagination.", 
                  date: "July-Aug 2024" 
                },
                { 
                  name: "Berkeley M.E.T. Innovation Academy", 
                  desc: "Immersive experience at the intersection of engineering and business, fostering entrepreneurial solutions to real-world problems.", 
                  date: "June-July 2024" 
                },
                { 
                  name: "Pioneer Academics", 
                  desc: "The world's only fully accredited online research program culminating in undergraduate-level research under university faculty mentorship.", 
                  date: "Jan-July 2024" 
                },
                { 
                  name: "The Stanford Daily", 
                  desc: "Hands-on multimedia journalism training led by Stanford Daily editors, focusing on reporting, writing, and digital storytelling.", 
                  date: "Sept 2023" 
                },
                { 
                  name: "School of New York Times", 
                  desc: "Explores the diverse fields of journalism and media through the lens of The New York Times, taught by award-winning journalists.", 
                  date: "August 2023" 
                },
                { 
                  name: "The Concord Review TCR History Camp", 
                  desc: "Intensive academic writing workshop focused on historical research methodology and the production of scholarly history papers.", 
                  date: "June 2023" 
                },
                { 
                  name: "Physics in and Through Cosmology Completion by Berkeley Lawrence Lab", 
                  desc: "Exploration of the universe's history and structure through cosmology and particle physics, guided by LBNL researchers.", 
                  date: "July 2022" 
                },
              ].map((prog, idx) => (
                <div key={idx} className="bg-white p-5 rounded-lg border border-slate-100 shadow-sm hover:shadow-md hover:border-purple-200 transition-all flex flex-col h-full">
                  <div className="flex justify-between items-start mb-2">
                    <div className="p-1.5 bg-purple-50 rounded-md text-purple-600 mb-2 w-fit">
                      <Globe size={16} />
                    </div>
                    <span className="text-xs font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded">{prog.date}</span>
                  </div>
                  <h4 className="font-bold text-slate-800 text-sm mb-1.5">{prog.name}</h4>
                  {prog.desc && <p className="text-slate-500 text-xs leading-relaxed">{prog.desc}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-xl mb-4">
              <Users className="w-8 h-8 text-blue-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership & Impact</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Unfold4All - Modified to a div with internal links */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all group hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-900/20">
              <div className="flex items-center justify-between mb-2">
                <a 
                  href="https://www.unfold4all.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                >
                  <h3 className="text-2xl font-bold text-white">Unfold4All</h3>
                  <ExternalLink className="w-5 h-5 opacity-50 hover:opacity-100 transition-opacity" />
                </a>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-bold rounded-full uppercase tracking-wide whitespace-nowrap">Founder & President</span>
              </div>
              <p className="text-slate-400 text-sm mb-6 italic">Sept 2021 - Present</p>
              
              <p className="text-slate-300 mb-4 text-sm">
                Founded a 501c3 Nonprofit Corporation to bring the untold stories and diverse perspectives of underrepresented cultures to classrooms across the globe.
              </p>

              <ul className="space-y-3">
                 <li className="flex items-start gap-3 text-slate-400 text-xs">
                  <div className="mt-1 w-1 h-1 rounded-full bg-blue-400 flex-shrink-0"></div>
                  <span><strong>Curriculum:</strong> Created peer-reviewed courses uncovering omitted history. Developed 4 online courses taught to <strong>900+ students</strong> across 2 middle schools, specialized centers, Las Positas College, and Stanford.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-400 text-xs">
                  <div className="mt-1 w-1 h-1 rounded-full bg-blue-400 flex-shrink-0"></div>
                  <span><strong>Podcast:</strong> Host of "What Your History Textbook Left Out" (18 episodes, 200+ active listeners). Interviews with professors and students to expose new voices.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-400 text-xs">
                  <div className="mt-1 w-1 h-1 rounded-full bg-blue-400 flex-shrink-0"></div>
                  <span>
                    <strong>Impact:</strong> 300+ monthly online new students. Featured in{' '}
                    <a 
                      href="https://www.independentnews.com/news/dublin_news/teen-develops-new-curriculum-centered-on-heritage-of-local-native-americans/article_865f1bdf-7b1a-4450-9570-3f37f7a50e9b.html"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline hover:text-blue-300 transition-colors"
                    >
                      The Independent
                    </a>
                    {' '}by Dawnmarie Fehr.
                  </span>
                </li>
                 <li className="flex items-start gap-3 text-slate-400 text-xs">
                  <div className="mt-1 w-1 h-1 rounded-full bg-blue-400 flex-shrink-0"></div>
                  <span><strong>Advisor:</strong> Tina Henson, Director of Tri-city Native American Center.</span>
                </li>
              </ul>
            </div>

            <a 
              href="https://www.guardiansaga.support/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-purple-500/50 transition-all block group hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-900/20"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors flex items-center gap-2">
                  Guardian Saga Support <ExternalLink className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
                </h3>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-bold rounded-full uppercase tracking-wide w-fit">Co-Founder</span>
              </div>
              <p className="text-slate-400 text-sm mb-6 italic">April 2022 – Present</p>
              
              <p className="text-slate-300 text-sm mb-4 font-medium">
                Director of Volunteer Services
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-slate-400 text-xs">
                  <div className="mt-1 w-1 h-1 rounded-full bg-purple-400 flex-shrink-0"></div>
                  <span>Collaborated with founder James Rhoe and Condor Light Of The Dark (Nexus Guardian Arts) to establish a volunteer program with 10 members (4 adults, 6 youths).</span>
                </li>
                 <li className="flex items-start gap-3 text-slate-400 text-xs">
                  <div className="mt-1 w-1 h-1 rounded-full bg-purple-400 flex-shrink-0"></div>
                  <span>Organized 10+ workshops for underprivileged youth including Fresh Lifelines for Youth, Friends of Children with Special Needs (FCSN), American Indian Child Resource Center, and The Kinship.</span>
                </li>
              </ul>
            </a>
          </div>

          {/* Additional Volunteer Leadership */}
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
               <Heart className="text-pink-500 w-6 h-6" /> Volunteer & Leadership Experience
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
               <div className="bg-slate-800 p-5 rounded-xl border border-slate-700 relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-3 opacity-10">
                       <Mic className="text-white w-12 h-12" />
                   </div>
                  <h4 className="text-white font-bold mb-1">FCSN Voices Team Lead</h4>
                  <p className="text-slate-400 text-xs mb-3">July 2021 - Present</p>
                  <p className="text-slate-300 text-xs leading-relaxed mb-2">
                    I lead a team of 50 volunteers, publishing/editing weekly articles for the special needs community. We’ve had over 80,000 views on our 250 articles.
                  </p>
                  <div className="mt-3 pt-3 border-t border-slate-700">
                      <p className="text-[10px] text-slate-500 uppercase tracking-wider font-bold mb-1">Promotion Path</p>
                      <p className="text-xs text-blue-300 flex items-center gap-1 flex-wrap">
                          Youth Reporter <span className="text-slate-600">→</span> Editor <span className="text-slate-600">→</span> Asst. Lead <span className="text-slate-600">→</span> Team Lead
                      </p>
                  </div>
               </div>
               
               <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
                  <h4 className="text-white font-bold mb-1">SNTutoring Coordinator</h4>
                  <p className="text-slate-400 text-xs mb-3">July 2022 - Present</p>
                  <p className="text-slate-300 text-xs leading-relaxed mb-2">
                    Volunteer tutor for adult special needs individuals.
                  </p>
                  <div className="mt-3 pt-3 border-t border-slate-700">
                      <p className="text-[10px] text-slate-500 uppercase tracking-wider font-bold mb-1">Growth</p>
                      <p className="text-xs text-purple-300">
                         Promoted to Coordinator in March 2024.
                      </p>
                  </div>
               </div>

               <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
                  <h4 className="text-white font-bold mb-1">Young Leaders Committee</h4>
                  <p className="text-slate-400 text-xs mb-3">Sept 2024 - Present</p>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    Nominated by FCSN Leadership as an outstanding leader covering broader FCSN communities for matters beyond volunteering.
                  </p>
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* Research & Awards (Stacked Section) */}
      <section id="research" className="py-24 bg-blue-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-20">
          
          {/* 1. Research Publications */}
          <div>
            <div className="mb-8 flex items-center gap-3">
               <div className="p-2 bg-blue-100 text-blue-600 rounded-lg"><Microscope size={28} /></div>
               <h3 className="text-3xl font-bold text-slate-900">Research Publications</h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "The Fremont Frontier: A Modern Middle Ground?",
                  pub: "JSR (Journal of Student Research) Vol 14",
                  date: "2025",
                  link: "https://www.jsr.org/hs/index.php/path/search/authors/view?givenName=Isaac&familyName=He&affiliation=The%20Quarry%20Lane%20School&country=US&authorName=He%2C%20Isaac",
                  summary: "Explores the socio-cultural evolution of Fremont, analyzing its role as a modern intersection of diverse historical narratives."
                },
                {
                  title: "Resilience through Ritual: Analysis of Kiowa Dances",
                  pub: "Under Consideration for the Concord Review Vol 27",
                  date: "2025 Winter Edition",
                  link: "https://drive.google.com/file/u/1/d/1E4IGGa_gZ4GizkMgOplmtQXmT_SU2HGb/view?usp=drive_link",
                  summary: "Examines how traditional Kiowa dance rituals function as vital mechanisms for cultural resilience and identity preservation."
                },
                {
                  title: "Analyzing Student and Teacher Understanding of Indigenous History",
                  pub: "Curieux Academic Journal",
                  date: "March 2025",
                  link: "https://www.curieuxacademicjournal.com/_files/ugd/99711c_9f322cff275f4b2698a4935fad6239ab.pdf",
                  summary: "Investigates discrepancies between current curriculum standards and actual student/teacher knowledge regarding Indigenous history."
                }
              ].map((paper, idx) => (
                <a 
                  key={idx} 
                  href={paper.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col h-full hover:border-blue-300 hover:shadow-md transition-all group"
                >
                  <div className="flex justify-between items-start mb-2">
                     <h4 className="font-bold text-slate-800 leading-snug group-hover:text-blue-600 transition-colors flex-1">
                       {paper.title}
                     </h4>
                     <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-500 ml-2 flex-shrink-0 mt-1" />
                  </div>
                  <p className="text-sm text-slate-600 mb-4 italic leading-relaxed flex-grow">{paper.summary}</p>
                  <div className="flex justify-between items-center text-xs font-medium border-t border-slate-50 pt-3 mt-auto">
                    <span className="text-blue-600 flex items-center gap-1">
                       <FileText size={12} /> {paper.pub}
                    </span>
                    <span className="text-slate-400">{paper.date}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* 2. Selected Honors (Stacked Below) */}
          <div id="honors">
             <div className="mb-8 flex items-center gap-3 border-b border-slate-200 pb-4">
               <div className="p-2 bg-amber-100 text-amber-600 rounded-lg"><Award size={28} /></div>
               <h3 className="text-3xl font-bold text-slate-900">Selected Honors & Awards</h3>
            </div>

            {/* Featured Main Award */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl p-8 text-white mb-8 shadow-lg relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Award size={100} />
               </div>
               <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                     <span className="bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded">Most Prestigious</span>
                     <span className="text-slate-400 text-sm">2024, 2025</span>
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">The Quarry Lane School Head Master Award</h4>
                  <p className="text-slate-300 text-lg">Awarded for highest academic rigor and representing the school's core values.</p>
               </div>
            </div>

            {/* Grid for other awards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
               {[
                 { title: "SXSW Int'l Student Impact Challenge Finalist", date: "March 2025", desc: "Top 6 Finalist ($1000 funding)" },
                 { title: "Scholastic Regional Gold Key", date: "March 2025", desc: "National Silver Medal" },
                 { title: "Alameda County Science Fair (ACSEF)", date: "2021-2023", desc: "3x 1st Place Award Winner" },
                 { title: "Alameda County Science Fair (ACSEF)", date: "2024, 2025", desc: "2x 2nd Place Award Winner" },
                 { title: "ACSEF Chevron Innovation Award", date: "2023", desc: "1st Place ($800/team); President's Award ($100)" },
                 { title: "California Science & Engineering Fair", date: "2021-2023", desc: "3x State Qualifier" },
                 { title: "Broadcom MASTERS Nominee", date: "2021, 2022", desc: "2x Nominee (Middle School)" },
                 { title: "BlueOcean Entrepreneur Competition", date: "2024", desc: "Top 100 Global" },
                 { title: "Conrad Challenge Innovator", date: "2023, 2024", desc: " recognized for innovation in 22-23 & 23-24" },
                 { title: "President's Volunteer Service Award", date: "2024, 2025", desc: "Gold Level (with FCSN)" },
                 { title: "AP Scholar with Distinction", date: "June 2024", desc: "College Board Honor" },
                 { title: "American Computer Science League", date: "2022-2024", desc: "3x Finalist" }
               ].map((award, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm hover:border-amber-200 transition-colors">
                     <div className="flex justify-between items-start mb-1">
                        <h5 className="font-bold text-slate-800 text-sm leading-snug">{award.title}</h5>
                        <span className="text-xs font-bold text-slate-400 whitespace-nowrap ml-2">{award.date}</span>
                     </div>
                     <p className="text-xs text-slate-500">{award.desc}</p>
                  </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Innovation / Projects */}
      <section id="innovation" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionTitle 
          icon={Cpu} 
          title="Technology & Innovation" 
          subtitle="Building hardware and AI solutions to solve real-world accessibility and security challenges."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Vector Auth",
              tags: ["AI", "Security", "UWB"],
              desc: "Patent pending: Utilizes UWB and Speaker ID AI to provide hands-free multi-factor authentication.",
              year: "Mar 2025",
              link: "https://github.com/Opby/vectorauth"
            },
            {
              title: "LiDAR Collision Prevention",
              tags: ["Hardware", "Safety"],
              desc: "LiDAR Based Collision Prevention System for Any Vehicles.",
              year: "Mar 2025",
              link: "https://github.com/Opby/LiDAR-based-anti-collision-system-for-vehicles"
            },
            {
              title: "Face Mask Clip-on",
              tags: ["Hardware", "Audio"],
              desc: "Amplifying device to enable communication through face masks.",
              year: "2024",
              link: "https://github.com/Opby/Smart-Face-Mask-Accessory"
            },
            {
              title: "ASL CNN Classification",
              tags: ["ML", "Computer Vision"],
              desc: "Applications of Convolutional Neural Networks in the Classification of ASL American Sign Language @ ASDRP.",
              year: "2023",
              link: "https://www.youtube.com/watch?v=7Z55OywHypE&list=LL&index=1&ab_channel=ASDRP"
            },
            {
              title: "PictoRead",
              tags: ["AI", "Accessibility"],
              desc: "Online AI-based platform to generate audio and visual aids for kids with ASD.",
              year: "Jan 2024",
              link: "https://github.com/Opby/PictoRead"
            },
            {
              title: "Wearable Allergen Detector",
              tags: ["AI", "HealthTech"],
              desc: "Wearable Environmental Allergen Detector powered by AI.",
              year: "2024",
              link: "https://github.com/Opby/Unmasking-Allergens-with-an-AI-powered-Wearable"
            },
            {
              title: "On-Device Personal Assistant",
              tags: ["AI", "LLM"],
              desc: "On-Device Personal Assistant for Neurodivergent individuals.",
              year: "2025",
              link: "https://github.com/Opby/Location-Aware-Private-Personal-LLM-for-Special-Needs-Communities"
            },
            {
              title: "THINK Clear",
              tags: ["HealthTech", "Wearable"],
              desc: "Smart Glasses for Dementia Patients.",
              year: "2024",
              link: "https://devpost.com/software/thi-k-clear"
            }
          ].map((project, idx) => (
            <a 
              key={idx} 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-sm hover:shadow-md border border-slate-100 overflow-hidden transition-all duration-300 block group hover:-translate-y-1"
            >
              <div className="p-6 h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                    {project.link.includes('youtube') ? <Youtube className="text-red-600 w-6 h-6" /> : <Code className="text-blue-600 w-6 h-6" />}
                  </div>
                  <span className="text-xs font-bold text-slate-400">{project.year}</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                  <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-blue-500" />
                </div>
                <p className="text-slate-600 text-sm mb-4 flex-grow">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Footer/Contact */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Let's Connect</h2>
          <div className="flex justify-center gap-6 mb-8">
            <a href="mailto:isaache64@gmail.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <Mail size={20} />
              <span>isaache64@gmail.com</span>
            </a>
            <a href="https://github.com/Opby" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>
          <p className="text-sm">
            © {new Date().getFullYear()} Isaac He. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}