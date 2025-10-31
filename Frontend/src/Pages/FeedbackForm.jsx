import React, { useState } from 'react';
import logo from '../../public/Graphura.jpg';

const FeedbackForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        internUniqueId: '',
        internName: '',
        department: '',
        seniorOrManager: '',
        joiningDate: '',

        Q1_internship: { answer: '' },
        Q2_internship: { answer: '' },
        Q3_internship: { answer: [] },
        Q4_internship: { answer: '' },
        Q5_internship: { answer: '' },
        Q6_internship: { answer: '' },

        Q1_incharge: { answer: '' },
        Q2_incharge: { answer: '' },
        Q3_incharge: { answer: '' },

        Q1_social: { answer: '' },
        Q2_social: { answer: '' },
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [originalSuggestion, setOriginalSuggestion] = useState('');
    const [showSuggestions, setShowSuggestions] = useState({});
    const [skillSearch, setSkillSearch] = useState('');
    const [showSkillSuggestions, setShowSkillSuggestions] = useState(false);

    const steps = [
        { number: 1, title: 'Intern Details', icon: '👤' },
        { number: 2, title: 'Intern Experience', icon: '💼' },
        { number: 3, title: 'Mentor Feedback', icon: '👨‍🏫' },
        { number: 4, title: 'Social Media', icon: '📱' },
        { number: 5, title: 'Review & Submit', icon: '✅' }
    ];

    // Enhanced skills list with categories
    const predefinedSkills = [
        // 🧠 Technical Skills
        'React.js', 'Next.js', 'Vue.js', 'Angular', 'Node.js', 'Express.js',
        'JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'C#', 'PHP', 'Ruby',
        'Go', 'Kotlin', 'Swift', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap',
        'SASS', 'MongoDB', 'MySQL', 'PostgreSQL', 'SQLite', 'Firebase', 'Supabase',
        'GraphQL', 'REST APIs', 'WebSockets', 'Docker', 'Kubernetes', 'Git', 'GitHub',
        'Jenkins', 'CI/CD', 'Linux', 'AWS', 'Azure', 'Google Cloud', 'Vercel',
        'Netlify', 'Nginx', 'Redis',

        // 🎨 Design Skills
        'UI/UX Design', 'Figma', 'Adobe XD', 'Adobe Photoshop', 'Adobe Illustrator',
        'Canva', 'Wireframing', 'Prototyping', 'User Research', 'Design Thinking',
        'Interaction Design', 'Color Theory', 'Typography', 'Motion Design',
        'Brand Identity', '3D Modeling', 'Blender', 'After Effects',

        // 📊 Data & AI Skills
        'Data Analysis', 'Data Visualization', 'Machine Learning', 'Deep Learning',
        'Artificial Intelligence', 'NLP (Natural Language Processing)',
        'Computer Vision', 'TensorFlow', 'PyTorch', 'Pandas', 'NumPy', 'Matplotlib',
        'Seaborn', 'Excel', 'Power BI', 'Tableau', 'SQL Queries',
        'Statistical Analysis', 'Big Data', 'Data Cleaning',

        // 📈 Marketing Skills
        'Digital Marketing', 'SEO', 'SEM', 'Social Media Marketing', 'Content Marketing',
        'Email Marketing', 'Affiliate Marketing', 'Google Analytics',
        'Google Ads', 'Meta Ads', 'PPC Advertising', 'Brand Strategy',
        'Influencer Marketing', 'Market Research', 'Copywriting', 'Campaign Management',
        'Lead Generation', 'CRM Tools', 'HubSpot', 'Canva Marketing',

        // 🧾 Content & Media Skills
        'Content Writing', 'Blog Writing', 'Script Writing', 'Technical Writing',
        'Copywriting', 'Video Editing', 'Photo Editing', 'Graphic Design',
        'Podcast Editing', 'Content Strategy', 'YouTube SEO', 'Social Media Management',

        // 👥 Professional & Management Skills
        'Project Management', 'Agile Methodology', 'Scrum', 'Kanban',
        'Leadership', 'Team Collaboration', 'Communication', 'Problem Solving',
        'Critical Thinking', 'Decision Making', 'Time Management',
        'Client Communication', 'Presentation Skills', 'Negotiation',
        'Conflict Resolution', 'Mentorship', 'Adaptability',

        // ⚙️ DevOps & Tools
        'Docker', 'Kubernetes', 'Terraform', 'Ansible', 'Jira', 'Trello', 'Slack',
        'VS Code', 'Postman', 'Figma to React', 'API Testing', 'Unit Testing',
        'Jest', 'Cypress', 'Mocha', 'Playwright',

        // 📱 Mobile Development
        'React Native', 'Flutter', 'SwiftUI', 'Android Development', 'iOS Development',
        'Firebase Authentication', 'Push Notifications', 'Mobile UI/UX',

        // 🧩 Emerging Tech
        'Blockchain', 'Solidity', 'Web3.js', 'Smart Contracts', 'Metaverse Design',
        'AR/VR', 'Prompt Engineering', 'Chatbot Development', 'RPA (Automation)'
    ];

    // AI Suggestions for each question
    const questionSuggestions = {
        Q1_internship: "💡 Mention specific tasks like 'Developed React components', 'Managed database queries', or 'Created UI/UX designs'. Include technologies used.",
        Q2_internship: "🌟 Describe what made it meaningful - learning, impact, teamwork, or challenge.",
        Q3_internship: "🎯 Select skills you actively used or improved. Technical and soft skills.",
        Q4_internship: "🤝 Mention collaboration, support received, and communication style.",
        Q5_internship: "❤️ Highlight training, company culture, projects, or team support.",
        Q6_internship: "💭 Be constructive! Suggest onboarding, training, or project improvements.",
        Q3_incharge: "🙏 Share specific help received or qualities you appreciated."
    };

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleQuestionChange = (questionKey, value) => {
        setFormData(prev => ({
            ...prev,
            [questionKey]: {
                ...prev[questionKey],
                answer: value
            }
        }));

        if (questionKey === 'Q6_internship' && !originalSuggestion) {
            setOriginalSuggestion(value);
        }
    };

    const toggleSuggestion = (key) => {
        setShowSuggestions(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    const validateStep = (step) => {
        const newErrors = {};

        switch (step) {
            case 1:
                if (!formData.internUniqueId.trim()) newErrors.internUniqueId = 'Intern ID is required';
                if (!formData.internName.trim()) newErrors.internName = 'Name is required';
                if (!formData.department.trim()) newErrors.department = 'Department is required';
                if (!formData.seniorOrManager.trim()) newErrors.seniorOrManager = 'Senior/Manager name is required';
                if (!formData.joiningDate) newErrors.joiningDate = 'Joining date is required';
                break;

            case 2:
                if (!formData.Q1_internship.answer.trim()) newErrors.Q1_internship = 'This field is required';
                if (!formData.Q2_internship.answer.trim()) newErrors.Q2_internship = 'This field is required';
                if (formData.Q3_internship.answer.length === 0) newErrors.Q3_internship = 'Please select at least one skill';
                if (!formData.Q4_internship.answer.trim()) newErrors.Q4_internship = 'This field is required';
                if (!formData.Q5_internship.answer.trim()) newErrors.Q5_internship = 'This field is required';
                if (!formData.Q6_internship.answer.trim()) newErrors.Q6_internship = 'Please provide your suggestions';
                break;

            case 3:
                if (!formData.Q1_incharge.answer) newErrors.Q1_incharge = 'This field is required';
                if (!formData.Q2_incharge.answer) newErrors.Q2_incharge = 'This field is required';
                if (!formData.Q3_incharge.answer.trim()) newErrors.Q3_incharge = 'This field is required';
                break;

            case 4:
                if (!formData.Q1_social.answer) newErrors.Q1_social = 'This field is required';
                if (!formData.Q2_social.answer) newErrors.Q2_social = 'This field is required';
                break;
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validateStep(currentStep)) {
            setCurrentStep(prev => prev + 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handlePrevious = () => {
        setCurrentStep(prev => prev - 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // API call to submit feedback
    const submitFeedbackToAPI = async (feedbackData) => {
        try {
            const response = await fetch('/api/submit-feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(feedbackData),
            });

            if (!response.ok) {
                throw new Error('Failed to submit feedback');
            }

            return await response.json();
        } catch (error) {
            throw new Error(`Submission failed: ${error.message}`);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const isSuggestionModified = formData.Q6_internship.answer.trim() !== originalSuggestion;

        if (!isSuggestionModified && originalSuggestion) {
            alert('Please make specific changes to the suggestions field before submitting.');
            setIsSubmitting(false);
            return;
        }

        if (validateStep(currentStep)) {
            try {
                // Prepare data for API 
                const submissionData = {
                    internUniqueId: formData.internUniqueId,
                    internName: formData.internName,
                    department: formData.department,
                    seniorOrManager: formData.seniorOrManager,
                    joiningDate: formData.joiningDate,

                    Q1_internship: { answer: formData.Q1_internship.answer },
                    Q2_internship: { answer: formData.Q2_internship.answer },
                    Q3_internship: { answer: formData.Q3_internship.answer },
                    Q4_internship: { answer: formData.Q4_internship.answer },
                    Q5_internship: { answer: formData.Q5_internship.answer },
                    Q6_internship: { answer: formData.Q6_internship.answer },

                    Q1_incharge: { answer: formData.Q1_incharge.answer },
                    Q2_incharge: { answer: formData.Q2_incharge.answer },
                    Q3_incharge: { answer: formData.Q3_incharge.answer },

                    Q1_social: { answer: formData.Q1_social.answer },
                    Q2_social: { answer: formData.Q2_social.answer },
                };

                await submitFeedbackToAPI(submissionData);

                // Success handling
                console.log('Form submitted successfully:', submissionData);
                alert('🎉 Feedback submitted successfully! Thank you for your valuable input!');

                // Reset form
                setFormData({
                    internUniqueId: '',
                    internName: '',
                    department: '',
                    seniorOrManager: '',
                    joiningDate: '',
                    Q1_internship: { answer: '' },
                    Q2_internship: { answer: '' },
                    Q3_internship: { answer: [] },
                    Q4_internship: { answer: '' },
                    Q5_internship: { answer: '' },
                    Q6_internship: { answer: '' },
                    Q1_incharge: { answer: '' },
                    Q2_incharge: { answer: '' },
                    Q3_incharge: { answer: '' },
                    Q1_social: { answer: '' },
                    Q2_social: { answer: '' },
                });
                setCurrentStep(1);

            } catch (error) {
                console.error('Submission error:', error);
                alert(`❌ There was an error submitting your feedback. Please try again. Error: ${error.message}`);
            } finally {
                setIsSubmitting(false);
            }
        } else {
            setIsSubmitting(false);
        }
    };

    // Filter skills based on search
    const filteredSkills = predefinedSkills.filter(skill =>
        skill.toLowerCase().includes(skillSearch.toLowerCase())
    );

    const addSkill = (skill) => {
        const currentSkills = formData.Q3_internship.answer;
        if (!currentSkills.includes(skill)) {
            const updatedSkills = [...currentSkills, skill];
            handleQuestionChange('Q3_internship', updatedSkills);
        }
        setSkillSearch('');
        setShowSkillSuggestions(false);
    };

    const removeSkill = (skillToRemove) => {
        const updatedSkills = formData.Q3_internship.answer.filter(skill => skill !== skillToRemove);
        handleQuestionChange('Q3_internship', updatedSkills);
    };

    const handleSkillSearchChange = (value) => {
        setSkillSearch(value);
        setShowSkillSuggestions(value.length > 0);
    };

    const handleAddCustomSkill = () => {
        if (skillSearch.trim() && !formData.Q3_internship.answer.includes(skillSearch.trim())) {
            addSkill(skillSearch.trim());
        }
    };

    const toggleSkill = (skill) => {
        const currentSkills = formData.Q3_internship.answer;
        if (currentSkills.includes(skill)) {
            removeSkill(skill);
        } else {
            addSkill(skill);
        }
    };

    const progressPercentage = ((currentStep - 1) / (steps.length - 1)) * 100;

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100 py-4 px-3 sm:py-8 sm:px-4">
            <div className="max-w-7xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden border border-white/20">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 p-4 sm:p-6 md:p-8 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative z-10 text-center">
                        <img 
                            src={logo} 
                            alt="Graphura" 
                            className="mx-auto mb-3 sm:mb-4 h-12 sm:h-16 md:h-20 w-12 sm:w-16 md:w-20 rounded-full object-cover border-2 border-white/30" 
                        />
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 font-['Inter']">
                            Graphura Internship Feedback
                        </h1>
                        <p className="text-blue-100 text-sm sm:text-base md:text-lg font-['Inter']">
                            Share your valuable journey and help us grow together
                        </p>
                        <div className="flex justify-center mt-3 sm:mt-4 space-x-1 sm:space-x-2">
                            {steps.map((step) => (
                                <div
                                    key={step.number}
                                    className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${currentStep >= step.number ? 'bg-white' : 'bg-white/30'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="px-4 sm:px-6 md:px-8 pt-4 sm:pt-6 md:pt-8">
                    <div className="mb-4 sm:mb-6">
                        <div className="flex justify-between text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">
                            <span className="font-semibold font-['Inter']">Step {currentStep} of {steps.length}</span>
                            <span className="font-semibold font-['Inter']">{Math.round(progressPercentage)}% Complete</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3 shadow-inner">
                            <div
                                className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 sm:h-3 rounded-full transition-all duration-500 shadow-md"
                                style={{ width: `${progressPercentage}%` }}
                            ></div>
                        </div>
                    </div>

                    {/* Step Indicators */}
                    <div className="flex justify-between items-center mb-6 sm:mb-8 overflow-x-auto py-3 sm:py-4 -mx-2 px-2">
                        {steps.map((step, index) => (
                            <div key={step.number} className="flex items-center flex-shrink-0">
                                <div
                                    className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center font-semibold transition-all duration-300 shadow-md ${currentStep >= step.number
                                            ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white scale-105'
                                            : 'bg-gray-100 text-gray-400 border border-gray-200'
                                        }`}
                                >
                                    <span className="text-sm sm:text-base md:text-lg">{step.icon}</span>
                                </div>
                                <span
                                    className={`ml-2 font-medium hidden sm:block transition-all duration-300 font-['Inter'] ${currentStep >= step.number
                                            ? 'text-gray-800 font-semibold text-xs md:text-sm'
                                            : 'text-gray-500 text-xs md:text-sm'
                                        }`}
                                >
                                    {step.title}
                                </span>
                                {index < steps.length - 1 && (
                                    <div
                                        className={`w-4 sm:w-6 md:w-8 h-1 mx-1 sm:mx-2 md:mx-4 transition-all duration-300 ${currentStep > step.number
                                                ? 'bg-gradient-to-r from-blue-500 to-purple-600'
                                                : 'bg-gray-200'
                                            }`}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Form Content */}
                <form onSubmit={handleSubmit} className="p-4 sm:p-6 md:p-8">
                    {/* Step 1: Intern Details */}
                    {currentStep === 1 && (
                        <div className="space-y-6 sm:space-y-8">
                            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm">
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2 sm:mb-3 font-['Inter']">👤 Intern Details</h2>
                                <p className="text-gray-600 text-sm sm:text-base md:text-lg font-['Inter']">Let's start with your basic information</p>
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:gap-6">
                                {[
                                    { label: 'Intern Unique ID *', field: 'internUniqueId', type: 'text', placeholder: 'Enter your unique ID' },
                                    { label: 'Full Name *', field: 'internName', type: 'text', placeholder: 'Enter your full name' },
                                    {
                                        label: 'Department *',
                                        field: 'department',
                                        type: 'select',
                                        options: [
                                            '',
                                            'Sales & Marketing',
                                            'Data Science & Analytics',
                                            'Email and Outreaching',
                                            'Human Resources',
                                            'Social Media Management',
                                            'Graphic Design',
                                            'Digital Marketing',
                                            'Video Editing',
                                            'Content Writing',
                                            'UI/UX Designing',
                                            'Front-end Developer',
                                            'Back-end Developer'
                                        ]
                                    },
                                    { label: 'Senior/Manager *', field: 'seniorOrManager', type: 'text', placeholder: 'Enter senior/manager name' },
                                ].map(({ label, field, type, placeholder, options }) => (
                                    <div key={field} className="space-y-2">
                                        <label className="block text-sm font-semibold text-gray-700 font-['Inter']">
                                            {label}
                                        </label>
                                        {type === 'select' ? (
                                            <select
                                                value={formData[field]}
                                                onChange={(e) => handleInputChange(field, e.target.value)}
                                                className={`w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-sm sm:text-base ${errors[field] ? 'border-red-500' : 'border-gray-200 hover:border-gray-300'
                                                    }`}
                                            >
                                                {options.map(option => (
                                                    <option key={option} value={option}>
                                                        {option || 'Select Department'}
                                                    </option>
                                                ))}
                                            </select>
                                        ) : (
                                            <input
                                                type={type}
                                                value={formData[field]}
                                                onChange={(e) => handleInputChange(field, e.target.value)}
                                                className={`w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-sm sm:text-base ${errors[field] ? 'border-red-500' : 'border-gray-200 hover:border-gray-300'
                                                    }`}
                                                placeholder={placeholder}
                                            />
                                        )}
                                        {errors[field] && (
                                            <p className="text-red-500 text-xs sm:text-sm flex items-center animate-pulse font-['Inter']">
                                                <span className="mr-1">⚠</span> {errors[field]}
                                            </p>
                                        )}
                                    </div>
                                ))}

                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold text-gray-700 font-['Inter']">
                                        Joining Date *
                                    </label>
                                    <input
                                        type="date"
                                        value={formData.joiningDate}
                                        onChange={(e) => handleInputChange('joiningDate', e.target.value)}
                                        className={`w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-sm sm:text-base ${errors.joiningDate ? 'border-red-500' : 'border-gray-200 hover:border-gray-300'
                                            }`}
                                    />
                                    {errors.joiningDate && (
                                        <p className="text-red-500 text-xs sm:text-sm flex items-center animate-pulse font-['Inter']">
                                            <span className="mr-1">⚠</span> {errors.joiningDate}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 2: Internship Experience */}
                    {currentStep === 2 && (
                        <div className="space-y-6 sm:space-y-8">
                            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm">
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2 sm:mb-3 font-['Inter']">💼 Internship Experience</h2>
                                <p className="text-gray-600 text-sm sm:text-base md:text-lg font-['Inter']">Share your journey and learnings with us</p>
                            </div>

                            <div className="space-y-6 sm:space-y-8">
                                {[
                                    {
                                        key: 'Q1_internship',
                                        label: '1. What tasks or responsibilities did you handle during your internship?',
                                        placeholder: 'Describe your main responsibilities, projects, and daily tasks...'
                                    },
                                    {
                                        key: 'Q2_internship',
                                        label: '2. Which project or activity did you find most meaningful or enjoyable?',
                                        placeholder: 'Share your most memorable project or activity and why it stood out...'
                                    },
                                    {
                                        key: 'Q4_internship',
                                        label: '4. How was your overall experience working with your team and mentor?',
                                        placeholder: 'Describe your collaboration, support received, and team dynamics...'
                                    },
                                    {
                                        key: 'Q5_internship',
                                        label: '5. What did you like the most about the internship program?',
                                        placeholder: 'Share what you enjoyed most about the program, culture, or learning...'
                                    },
                                    {
                                        key: 'Q6_internship',
                                        label: '6. Any suggestions to make the internship experience better?',
                                        placeholder: 'Your constructive suggestions for improvement...'
                                    },
                                ].map(({ key, label, placeholder }) => (
                                    <div key={key} className="space-y-3 sm:space-y-4">
                                        <div className="flex justify-between items-start">
                                            <label className="block text-base sm:text-lg font-semibold text-gray-800 font-['Inter'] leading-tight">
                                                {label}
                                            </label>
                                            {questionSuggestions[key] && (
                                                <button
                                                    type="button"
                                                    onClick={() => toggleSuggestion(key)}
                                                    className="text-blue-600 hover:text-blue-800 text-xs sm:text-sm font-medium bg-blue-50 px-2 sm:px-3 py-1 rounded-full transition-colors flex-shrink-0 ml-2"
                                                >
                                                    {showSuggestions[key] ? 'Hide' : '💡'}
                                                </button>
                                            )}
                                        </div>

                                        {showSuggestions[key] && questionSuggestions[key] && (
                                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 sm:p-4 rounded-lg animate-fadeIn">
                                                <p className="text-yellow-800 text-xs sm:text-sm font-['Inter']">{questionSuggestions[key]}</p>
                                            </div>
                                        )}

                                        <textarea
                                            value={formData[key].answer}
                                            onChange={(e) => handleQuestionChange(key, e.target.value)}
                                            rows={3}
                                            className={`w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-sm sm:text-base ${errors[key] ? 'border-red-500' : 'border-gray-200 hover:border-gray-300'
                                                }`}
                                            placeholder={placeholder}
                                        />
                                        {errors[key] && (
                                            <p className="text-red-500 text-xs sm:text-sm flex items-center animate-pulse font-['Inter']">
                                                <span className="mr-1">⚠</span> {errors[key]}
                                            </p>
                                        )}
                                    </div>
                                ))}

                                {/* Enhanced Skills Section with Search */}
                                <div className="space-y-4 sm:space-y-6">
                                    <label className="block text-lg sm:text-xl font-semibold text-gray-800 font-['Inter']">
                                        3. What new skills did you learn or improve during your internship?
                                    </label>
                                    <p className="text-gray-600 text-sm sm:text-base font-['Inter']">
                                        Search for skills or type your own. Select all that apply.
                                    </p>

                                    {showSuggestions.Q3_internship && (
                                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 sm:p-4 rounded-lg animate-fadeIn">
                                            <p className="text-yellow-800 text-xs sm:text-sm font-['Inter']">{questionSuggestions.Q3_internship}</p>
                                        </div>
                                    )}

                                    {/* Search and Add Skills */}
                                    <div className="space-y-3">
                                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                                            <div className="flex-1 relative">
                                                <input
                                                    type="text"
                                                    value={skillSearch}
                                                    onChange={(e) => handleSkillSearchChange(e.target.value)}
                                                    placeholder="Search skills or type to add custom skill..."
                                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-sm sm:text-base"
                                                    onFocus={() => setShowSkillSuggestions(true)}
                                                />
                                                
                                                {/* Skill Suggestions Dropdown */}
                                                {showSkillSuggestions && skillSearch && (
                                                    <div className="absolute z-10 w-full mt-1 bg-white border-2 border-gray-200 rounded-lg sm:rounded-xl shadow-lg max-h-60 overflow-y-auto">
                                                        {filteredSkills.length > 0 ? (
                                                            filteredSkills.map((skill) => (
                                                                <button
                                                                    key={skill}
                                                                    type="button"
                                                                    onClick={() => addSkill(skill)}
                                                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-left hover:bg-blue-50 transition-colors text-sm sm:text-base border-b border-gray-100 last:border-b-0"
                                                                >
                                                                    {skill}
                                                                    {formData.Q3_internship.answer.includes(skill) && (
                                                                        <span className="ml-2 text-green-600 text-xs">✓ Added</span>
                                                                    )}
                                                                </button>
                                                            ))
                                                        ) : (
                                                            <div className="px-3 sm:px-4 py-2 sm:py-3 text-gray-500 text-sm sm:text-base">
                                                                No matching skills found. Press "Add Custom Skill" to add "{skillSearch}"
                                                            </div>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                            
                                            <button
                                                type="button"
                                                onClick={handleAddCustomSkill}
                                                disabled={!skillSearch.trim()}
                                                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-200 text-sm sm:text-base whitespace-nowrap ${
                                                    skillSearch.trim() 
                                                        ? 'bg-green-500 text-white hover:bg-green-600 shadow-md' 
                                                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                                }`}
                                            >
                                                Add Custom Skill
                                            </button>
                                        </div>

                                        {/* Selected Skills Display */}
                                        {formData.Q3_internship.answer.length > 0 && (
                                            <div className="mt-4">
                                                <h4 className="text-sm sm:text-base font-semibold text-gray-700 mb-2 font-['Inter']">
                                                    Selected Skills ({formData.Q3_internship.answer.length})
                                                </h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {formData.Q3_internship.answer.map((skill) => (
                                                        <div
                                                            key={skill}
                                                            className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 hover:bg-blue-200"
                                                        >
                                                            {skill}
                                                            <button
                                                                type="button"
                                                                onClick={() => removeSkill(skill)}
                                                                className="ml-2 text-blue-600 hover:text-blue-800 font-bold text-sm"
                                                            >
                                                                ×
                                                            </button>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Quick Skill Selection */}
                                        <div className="mt-4">
                                            <h4 className="text-sm sm:text-base font-semibold text-gray-700 mb-3 font-['Inter']">
                                                Popular Skills (Click to toggle)
                                            </h4>
                                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3">
                                                {predefinedSkills.slice(0, 10).map((skill) => (
                                                    <button
                                                        key={skill}
                                                        type="button"
                                                        onClick={() => toggleSkill(skill)}
                                                        className={`p-2 sm:p-3 border-2 rounded-lg sm:rounded-xl text-center transition-all duration-200 text-xs sm:text-sm font-['Inter'] ${
                                                            formData.Q3_internship.answer.includes(skill)
                                                                ? 'bg-blue-100 border-blue-500 text-blue-700 shadow-md scale-105'
                                                                : 'border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 hover:shadow-sm'
                                                        }`}
                                                    >
                                                        {skill}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {errors.Q3_internship && (
                                        <p className="text-red-500 text-xs sm:text-sm flex items-center animate-pulse font-['Inter']">
                                            <span className="mr-1">⚠</span> {errors.Q3_internship}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 3: Mentor Feedback */}
                    {currentStep === 3 && (
                        <div className="space-y-6 sm:space-y-8">
                            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm">
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2 sm:mb-3 font-['Inter']">👨‍🏫 Mentor Feedback</h2>
                                <p className="text-gray-600 text-sm sm:text-base md:text-lg font-['Inter']">Help us improve our mentorship program</p>
                            </div>

                            <div className="space-y-6 sm:space-y-8">
                                {[
                                    {
                                        key: 'Q1_incharge',
                                        label: '1. How helpful and supportive was your in-charge during your internship?',
                                        type: 'select',
                                        options: [
                                            { value: '', label: 'Select an option' },
                                            { value: 'Excellent', label: 'Excellent - Always available and very supportive' },
                                            { value: 'Good', label: 'Good - Generally helpful when needed' },
                                            { value: 'Fair', label: 'Fair - Moderately supportive' },
                                            { value: 'Needs Improvement', label: 'Needs Improvement - Could be more supportive' }
                                        ]
                                    },
                                    {
                                        key: 'Q2_incharge',
                                        label: '2. Did your in-charge provide clear guidance and regular feedback?',
                                        type: 'select',
                                        options: [
                                            { value: '', label: 'Select an option' },
                                            { value: 'Yes, regularly', label: 'Yes, regularly - Consistent and clear feedback' },
                                            { value: 'Sometimes', label: 'Sometimes - Occasional guidance' },
                                            { value: 'Rarely', label: 'Rarely - Minimal feedback provided' },
                                            { value: 'No', label: 'No - No feedback received' }
                                        ]
                                    }
                                ].map(({ key, label, options }) => (
                                    <div key={key} className="space-y-3 sm:space-y-4">
                                        <label className="block text-base sm:text-lg font-semibold text-gray-800 font-['Inter']">
                                            {label}
                                        </label>
                                        <select
                                            value={formData[key].answer}
                                            onChange={(e) => handleQuestionChange(key, e.target.value)}
                                            className={`w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-sm sm:text-base ${errors[key] ? 'border-red-500' : 'border-gray-200 hover:border-gray-300'
                                                }`}
                                        >
                                            {options.map(option => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                        {errors[key] && (
                                            <p className="text-red-500 text-xs sm:text-sm flex items-center animate-pulse font-['Inter']">
                                                <span className="mr-1">⚠</span> {errors[key]}
                                            </p>
                                        )}
                                    </div>
                                ))}

                                <div className="space-y-3 sm:space-y-4">
                                    <div className="flex justify-between items-start">
                                        <label className="block text-base sm:text-lg font-semibold text-gray-800 font-['Inter']">
                                            3. Any message or appreciation you'd like to share with your in-charge?
                                        </label>
                                        {questionSuggestions.Q3_incharge && (
                                            <button
                                                type="button"
                                                onClick={() => toggleSuggestion('Q3_incharge')}
                                                className="text-blue-600 hover:text-blue-800 text-xs sm:text-sm font-medium bg-blue-50 px-2 sm:px-3 py-1 rounded-full transition-colors flex-shrink-0 ml-2"
                                            >
                                                {showSuggestions.Q3_incharge ? 'Hide' : '💡'}
                                            </button>
                                        )}
                                    </div>

                                    {showSuggestions.Q3_incharge && (
                                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 sm:p-4 rounded-lg animate-fadeIn">
                                            <p className="text-yellow-800 text-xs sm:text-sm font-['Inter']">{questionSuggestions.Q3_incharge}</p>
                                        </div>
                                    )}

                                    <textarea
                                        value={formData.Q3_incharge.answer}
                                        onChange={(e) => handleQuestionChange('Q3_incharge', e.target.value)}
                                        rows={3}
                                        className={`w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-sm sm:text-base ${errors.Q3_incharge ? 'border-red-500' : 'border-gray-200 hover:border-gray-300'
                                            }`}
                                        placeholder="Share your appreciation message or feedback for your mentor..."
                                    />
                                    {errors.Q3_incharge && (
                                        <p className="text-red-500 text-xs sm:text-sm flex items-center animate-pulse font-['Inter']">
                                            <span className="mr-1">⚠</span> {errors.Q3_incharge}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 4: Social Media */}
                    {currentStep === 4 && (
                        <div className="space-y-6 sm:space-y-8">
                            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm">
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2 sm:mb-3 font-['Inter']">📱 Social Media</h2>
                                <p className="text-gray-600 text-sm sm:text-base md:text-lg font-['Inter']">Stay connected with Graphura</p>
                            </div>

                            <div className="space-y-4 sm:space-y-6">
                                {[
                                    {
                                        key: 'Q1_social',
                                        platform: 'Instagram',
                                        icon: '📷',
                                        link: 'https://www.instagram.com/graphura.in/'
                                    },
                                    {
                                        key: 'Q2_social',
                                        platform: 'LinkedIn',
                                        icon: '💼',
                                        link: 'https://www.linkedin.com/company/graphura-india-private-limited/'
                                    }
                                ].map(({ key, platform, icon, link }) => (
                                    <div key={key} className="p-4 sm:p-6 border-2 border-blue-100 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 hover:shadow-lg transition-all duration-300">
                                        <label className="block text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 font-['Inter']">
                                            Are you following Graphura on {platform}?
                                        </label>
                                        <div className="flex flex-col sm:flex-row sm:gap-6 gap-3 mb-3 sm:mb-4">
                                            <label className="flex items-center cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name={key}
                                                    value="Yes"
                                                    checked={formData[key].answer === 'Yes'}
                                                    onChange={(e) => handleQuestionChange(key, e.target.value)}
                                                    className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 focus:ring-blue-500"
                                                />
                                                <span className="ml-2 text-gray-700 font-medium text-sm sm:text-base">Yes, I follow</span>
                                            </label>
                                            <label className="flex items-center cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name={key}
                                                    value="No"
                                                    checked={formData[key].answer === 'No'}
                                                    onChange={(e) => handleQuestionChange(key, e.target.value)}
                                                    className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 focus:ring-blue-500"
                                                />
                                                <span className="ml-2 text-gray-700 font-medium text-sm sm:text-base">Not yet</span>
                                            </label>
                                        </div>
                                        <a
                                            href={link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors group text-sm sm:text-base"
                                        >
                                            <span className="mr-2">{icon}</span>
                                            Follow us on {platform}
                                            <span className="ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                        </a>
                                        {errors[key] && (
                                            <p className="text-red-500 text-xs sm:text-sm mt-2 sm:mt-3 flex items-center animate-pulse font-['Inter']">
                                                <span className="mr-1">⚠</span> {errors[key]}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Step 5: Review & Submit */}
                    {currentStep === 5 && (
                        <div className="space-y-6 sm:space-y-8">
                            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm">
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2 sm:mb-3 font-['Inter']">✅ Review & Submit</h2>
                                <p className="text-gray-600 text-sm sm:text-base md:text-lg font-['Inter']">Final check before submitting your feedback</p>
                            </div>

                            <div className="space-y-4 sm:space-y-6 bg-gray-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 border-gray-200">
                                {[
                                    {
                                        title: '👤 Intern Details', icon: '👤', fields: [
                                            { label: 'ID', value: formData.internUniqueId },
                                            { label: 'Name', value: formData.internName },
                                            { label: 'Department', value: formData.department },
                                            { label: 'Senior/Manager', value: formData.seniorOrManager },
                                            { label: 'Joining Date', value: formData.joiningDate }
                                        ]
                                    },
                                    {
                                        title: '💼 Internship Experience', icon: '💼', fields: [
                                            { label: 'Responsibilities', value: formData.Q1_internship.answer, fullWidth: true },
                                            { label: 'Meaningful Project', value: formData.Q2_internship.answer, fullWidth: true },
                                            { label: 'Skills Learned', value: formData.Q3_internship.answer.join(', ') },
                                            { label: 'Team Experience', value: formData.Q4_internship.answer, fullWidth: true },
                                            { label: 'Most Liked', value: formData.Q5_internship.answer, fullWidth: true },
                                            { label: 'Suggestions', value: formData.Q6_internship.answer, fullWidth: true }
                                        ]
                                    },
                                    {
                                        title: '👨‍🏫 Mentor Feedback', icon: '👨‍🏫', fields: [
                                            { label: 'Supportiveness', value: formData.Q1_incharge.answer },
                                            { label: 'Guidance Frequency', value: formData.Q2_incharge.answer },
                                            { label: 'Appreciation Message', value: formData.Q3_incharge.answer, fullWidth: true }
                                        ]
                                    },
                                    {
                                        title: '📱 Social Media', icon: '📱', fields: [
                                            { label: 'Instagram', value: formData.Q1_social.answer },
                                            { label: 'LinkedIn', value: formData.Q2_social.answer }
                                        ]
                                    }
                                ].map((section, index) => (
                                    <div key={index} className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-sm border border-gray-100">
                                        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4 flex items-center font-['Inter']">
                                            <span className="mr-2 text-xl sm:text-2xl">{section.icon}</span>
                                            {section.title}
                                        </h3>
                                        <div className={`grid gap-3 sm:gap-4 ${section.fields.some(f => f.fullWidth) ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
                                            {section.fields.map((field, fieldIndex) => (
                                                <div key={fieldIndex} className={field.fullWidth ? 'sm:col-span-2' : ''}>
                                                    <strong className="text-gray-700 block mb-1 text-sm sm:text-base font-['Inter']">{field.label}:</strong>
                                                    <div className="text-gray-600 bg-gray-50 p-2 sm:p-3 rounded-lg border border-gray-200 min-h-[40px] text-sm sm:text-base font-['Inter']">
                                                        {field.value || <span className="text-gray-400">Not provided</span>}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}

                                {formData.Q6_internship.answer && formData.Q6_internship.answer === originalSuggestion && (
                                    <div className="bg-red-50 border-2 border-red-200 rounded-lg sm:rounded-xl p-3 sm:p-4 animate-pulse">
                                        <p className="text-red-700 font-medium flex items-center text-sm sm:text-base font-['Inter']">
                                            <span className="mr-2 text-lg sm:text-xl">⚠️</span>
                                            Please make specific changes to your suggestions before submitting
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
                        <button
                            type="button"
                            onClick={handlePrevious}
                            disabled={currentStep === 1}
                            className={`px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold transition-all duration-300 flex items-center text-sm sm:text-base ${currentStep === 1
                                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                    : 'bg-gradient-to-r from-gray-500 to-gray-600 text-white hover:from-gray-600 hover:to-gray-700 shadow-lg hover:shadow-xl transform hover:-translate-x-1'
                                }`}
                        >
                            <span className="mr-1 sm:mr-2">←</span> Previous
                        </button>

                        {currentStep < steps.length - 1 ? (
                            <button
                                type="button"
                                onClick={handleNext}
                                className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl sm:rounded-2xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:translate-x-1 flex items-center text-sm sm:text-base"
                            >
                                Next <span className="ml-1 sm:ml-2">→</span>
                            </button>
                        ) : (
                            <button
                                type="submit"
                                disabled={isSubmitting || (formData.Q6_internship.answer && formData.Q6_internship.answer === originalSuggestion)}
                                className={`px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center text-sm sm:text-base ${isSubmitting || (formData.Q6_internship.answer && formData.Q6_internship.answer === originalSuggestion)
                                        ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                                        : 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700'
                                    }`}
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center">
                                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        <span className="hidden sm:inline">Submitting...</span>
                                        <span className="sm:hidden">Submit...</span>
                                    </span>
                                ) : (
                                    <>
                                        <span className="mr-1 sm:mr-2">🚀</span> 
                                        <span className="hidden sm:inline">Submit Feedback</span>
                                        <span className="sm:hidden">Submit</span>
                                    </>
                                )}
                            </button>
                        )}
                    </div>
                </form>
            </div>

            <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        /* Improve font rendering */
        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
        </div>
    );
};

export default FeedbackForm;