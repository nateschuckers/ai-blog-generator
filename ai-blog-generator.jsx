import React, { useState, useCallback, useEffect } from 'react';

// --- SVG Icons (replaces lucide-react import) ---
const Icon = ({ children, className = '' }) => <div className={`w-5 h-5 ${className}`}>{children}</div>;

const Bot = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" /></svg>
);
const Camera = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" /><circle cx="12" cy="13" r="3" /></svg>
);
const Sparkles = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m12 3-1.9 4.2-4.2 1.9 4.2 1.9L12 15l1.9-4.2 4.2-1.9-4.2-1.9L12 3z" /><path d="M5 21v-4" /><path d="M19 21v-4" /><path d="M3 12H7" /><path d="M17 12h4" /></svg>
);
const Building2 = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18" /><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" /><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" /><path d="M10 6h4" /><path d="M10 10h4" /><path d="M10 14h4" /><path d="M10 18h4" /></svg>
);
const Copy = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
);
const Check = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="20 6 9 17 4 12" /></svg>
);
const ThumbsDown = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M17 14V2" /><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h-1a2 2 0 0 1-1.92-1.44l-1.4-3.44Z" /></svg>
);
const BookOpen = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
);
const Edit = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
);
const Feather = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" /><line x1="16" x2="2" y1="8" y2="22" /><line x1="17.5" x2="9" y1="15" y2="15" /></svg>
);
const SlidersHorizontal = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="21" x2="14" y1="4" y2="4" /><line x1="10" x2="3" y1="4" y2="4" /><line x1="21" x2="12" y1="12" y2="12" /><line x1="8" x2="3" y1="12" y2="12" /><line x1="21" x2="16" y1="20" y2="20" /><line x1="12" x2="3" y1="20" y2="20" /><line x1="14" x2="14" y1="2" y2="6" /><line x1="8" x2="8" y1="10" y2="14" /><line x1="16" x2="16" y1="18" y2="22" /></svg>
);
const ImageUp = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L11.5 16" /><path d="m16 5 2 2" /><path d="M21 15v6" /><path d="M18 18h6" /><circle cx="8" cy="8" r="2" /></svg>
);
const XCircle = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>
);
const CalendarDays = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg>
);
const Hash = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="4" x2="20" y1="9" y2="9" /><line x1="4" x2="20" y1="15" y2="15" /><line x1="10" x2="8" y1="3" y2="21" /><line x1="16" x2="14" y1="3" y2="21" /></svg>
);

// --- PROMPT LIBRARY (NOW WITH CATEGORIES) ---
const LONGITUDE_CATEGORIES = {
  'Location Guides': "Write a blog post about the best locations in the Greater Pittsburgh area (including Beaver County) for capturing stunning fall foliage. Describe the scenery at places like Raccoon Creek State Park or along the Ohio River. The goal is to inspire readers and subtly promote prints of these locations.",
  'Decor Tips': "Write a blog post on 'Bringing the Outdoors In: Decorating with Nature Photography'. Give tips on how landscape prints can create a calming atmosphere, add a pop of color, and serve as a focal point in a living room, bedroom, or office. Position prints as a key element of interior design.",
  'Behind the Shot': "Analyze the provided image and create a personal 'Story Behind the Shot' blog post. Describe the potential adventure of capturing it. Speculate on the time of day, the weather, the patience involved, and the feeling of getting the perfect shot. Make the reader feel connected to the art.",
  'Print Guides': "Create a blog post titled 'How to Choose the Right Size Landscape Print for Your Space'. Offer practical tips like the 2/3 rule for furniture, using painter's tape to visualize, and why going bigger is often better. This post should build buyer confidence.",
  'Iconic Views': "Write a blog post titled '3 Iconic Pittsburgh Views That Make Perfect Wall Art'. Focus on the classic Mt. Washington overlook, the golden bridges, and a serene river view. Explain why each works as art and who it would be best for. The goal is to sell prints.",
  'Equipment Review': "Write a detailed review of a specific piece of photography equipment. This will be based on user input.",
  'Monthly Blog Pack': "Generate a variable number of seasonally appropriate blog posts for a selected month.",
};
const FIGURE_FORM_CATEGORIES = {
  'Confidence & Empowerment': "Write a blog post about the concept of 'An Investment in Yourself'. Frame a boudoir shoot not as a luxury expense, but as a meaningful investment in self-confidence and personal empowerment that pays dividends long after the shoot is over. Use powerful, emotional language to connect with the reader's aspirations.",
  'Session Prep & Guides': "Create a 'What to Wear for Your Boudoir Session' guide. Offer ideas ranging from classic lingerie to cozy sweaters, a partner's button-down shirt, or simple white sheets. Explain how different outfits can evoke different moods (e.g., sensual, playful, intimate). The goal is to make preparation feel fun and accessible.",
  'The Experience': "Create a blog post detailing 'The Figure & Form Experience: From First Hello to Final Reveal'. Walk the reader through the entire process: the initial consultation, wardrobe planning, professional hair and makeup, the guided photoshoot, and the exciting image reveal session. Emphasize the luxury, comfort, and confidence-boosting aspects.",
  'Overcoming Fears': "Write a blog post titled '5 Common Fears About a Boudoir Shoot (And Why You Can Safely Ignore Them)'. Address fears like needing to lose weight, feeling awkward, privacy concerns, not having outfits, and the investment. The tone should be reassuring and empowering.",
  'Behind the Shot': "Analyze the provided portrait/boudoir image. Create a personal 'Story Behind the Shot' blog post. Focus on the mood, the lighting, and the emotion conveyed. Discuss how you might have directed the client to capture that specific moment of confidence or vulnerability. Make the reader feel the power of the experience.",
  'Equipment Review': "Write a detailed review of a specific piece of photography equipment for boudoir and portrait photography. This will be based on user input.",
  'Monthly Blog Pack': "Generate a variable number of seasonally appropriate blog posts for a selected month.",
};
const LONGITUDE_TONES = ['Adventurous', 'Educational', 'Inspirational', 'Serene'];
const FIGURE_FORM_TONES = ['Empowering', 'Luxurious', 'Reassuring', 'Playful'];
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const CopyButton = ({ textToCopy }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    try {
        const tempTextArea = document.createElement('textarea');
        tempTextArea.value = textToCopy;
        document.body.appendChild(tempTextArea);
        tempTextArea.select();
        document.execCommand('copy');
        document.body.removeChild(tempTextArea);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    } catch (err) {
        console.error("Copy failed", err);
        alert("Failed to copy text. Please try manually.");
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-2 right-2 p-2 bg-zinc-700/80 rounded-lg text-zinc-300 hover:bg-zinc-600 hover:text-white transition-all duration-200"
      aria-label="Copy to clipboard"
    >
      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
    </button>
  );
};


const OutputField = ({ label, content, isBody = false }) => {
  if (!content) return null;

  const renderBody = (text) => {
    const lines = text.split('\n');
    const elements = [];
    let listItems = [];

    const flushList = () => {
        if (listItems.length > 0) {
            elements.push(
                <ul key={`ul-${elements.length}`} className="list-disc list-inside space-y-2 my-4 pl-4">
                    {listItems.map((item, idx) => <li key={idx}>{item.replace(/^- /, '')}</li>)}
                </ul>
            );
            listItems = [];
        }
    };

    lines.forEach((line, index) => {
        if (line.startsWith('### ')) {
            flushList();
            elements.push(<h3 key={index} className="text-xl font-semibold mt-6 mb-2">{line.substring(4)}</h3>);
        } else if (line.startsWith('## ')) {
            flushList();
            elements.push(<h2 key={index} className="text-2xl font-bold mt-8 mb-4 border-b border-zinc-600 pb-2">{line.substring(3)}</h2>);
        } else if (line.startsWith('- ')) {
            listItems.push(line);
        } else if (line.trim() !== '') {
            flushList();
            elements.push(<p key={index} className="mb-4 leading-relaxed">{line}</p>);
        }
    });

    flushList(); // Add any remaining list items at the end
    return elements;
  };

  return (
    <div className="relative bg-zinc-800 border border-zinc-700 rounded-lg p-4 shadow-inner">
       <CopyButton textToCopy={content} />
      <label className="block text-sm font-semibold text-rose-300 mb-2">{label}</label>
      {isBody ? 
        <div className="prose prose-invert max-w-none prose-p:text-zinc-300 prose-headings:text-zinc-100">{renderBody(content)}</div>
        : <p className="text-zinc-200">{content}</p>
      }
    </div>
  );
};

// --- Main App Component ---
function App() {
  const [activeBusiness, setActiveBusiness] = useState('Longitude');
  const [selectedTopic, setSelectedTopic] = useState('All Topics');
  const [selectedTone, setSelectedTone] = useState(LONGITUDE_TONES[0]);
  const [customTopic, setCustomTopic] = useState('');
  const [equipmentName, setEquipmentName] = useState('');
  const [imageBase64, setImageBase64] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [blogPosts, setBlogPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');
  const [error, setError] = useState(null);
  const [startMonth, setStartMonth] = useState(MONTHS[new Date().getMonth()]);
  const [numPostsPerMonth, setNumPostsPerMonth] = useState(1);
  const [numMonths, setNumMonths] = useState(1);

  const fileToBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result.split(',')[1]);
    reader.onerror = error => reject(error);
  });

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 4 * 1024 * 1024) { // 4MB limit
          setError("Image is too large. Please select a file smaller than 4MB.");
          return;
      }
      setError(null);
      setImagePreview(URL.createObjectURL(file));
      const base64 = await fileToBase64(file);
      setImageBase64(base64);
    }
  };
  
  const clearImage = () => {
      setImagePreview(null);
      setImageBase64(null);
      const fileInput = document.getElementById('image-upload-input');
      if (fileInput) fileInput.value = '';
  };

  const handleBusinessChange = (businessKey) => {
    setActiveBusiness(businessKey);
    setSelectedTopic('All Topics');
    setSelectedTone(businessKey === 'Longitude' ? LONGITUDE_TONES[0] : FIGURE_FORM_TONES[0]);
    setCustomTopic('');
    setEquipmentName('');
    clearImage();
    setBlogPosts([]);
  };

  const handleTopicChange = (topic) => {
    setSelectedTopic(topic);
    setCustomTopic('');
    setEquipmentName('');
    clearImage();
  }

  const generateSinglePost = useCallback(async (prompt, finalTone, isMultiModal = false) => {
      const systemInstruction = {
        role: "model",
        parts: [{ text: `You are an expert SEO content strategist and copywriter for photographers. Your task is to generate a complete, ready-to-publish blog post. The output MUST be a single, valid JSON object. Do not include any text outside of the JSON object.
  The JSON object must have these keys: "title", "metaDescription", "slug", "tags", "body".
  - "title": A compelling, SEO-friendly title.
  - "metaDescription": A concise summary (155-160 characters) for search engines.
  - "slug": A URL-friendly slug with words separated by dashes.
  - "tags": A comma-separated string of 5-7 relevant tags.
  - "body": The full blog post content. This body MUST be well-structured for maximum SEO impact using Markdown format. It should include:
      - A compelling introduction that starts with an H3 heading (e.g., '### A New Perspective').
      - At least two H2 headings (formatted as '## Heading Text').
      - Use H3 headings (formatted as '### Sub-heading Text') where appropriate.
      - Incorporate bulleted lists (formatted as '- List Item', using a hyphen) to improve readability and target Google's featured snippets.
      - Naturally weave in relevant keywords.
      - Conclude with a strong call-to-action (CTA).
      - The entire body should be a single string with Markdown formatting and newlines (\\n) separating elements.` }]
      };
      
      let userParts = [{text: `Generate a blog post on this topic: "${prompt}". Adopt a ${finalTone} tone.` }];
      if(isMultiModal) {
        userParts.unshift({ inlineData: { mimeType: "image/jpeg", data: imageBase64 } });
      }
  
      const apiKey = "";
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;
      const payload = { contents: [{ role: "user", parts: userParts }], systemInstruction: systemInstruction };
      
      let response;
      let attempts = 0;
      while (attempts < 5) {
          response = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
          if (response.status === 429) {
              const delay = Math.pow(2, attempts) * 1000 + Math.random() * 1000;
              await new Promise(res => setTimeout(res, delay));
              attempts++;
          } else {
              break;
          }
      }

      if (!response.ok) throw new Error(`API Error: ${response.status} ${response.statusText}`);
  
      const result = await response.json();
      const candidate = result.candidates?.[0];
      const rawText = candidate?.content?.parts?.[0]?.text;
      
      if (!rawText) throw new Error("No content received from the API.");
  
      const cleanedText = rawText.replace(/^```json\n?/, '').replace(/\n?```$/, '');
      return JSON.parse(cleanedText);
  }, [imageBase64]);

  const generateBlogPost = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setBlogPosts([]);

    if (selectedTopic === 'Monthly Blog Pack') {
        const tempPosts = [];
        const baseCategories = activeBusiness === 'Longitude' ? LONGITUDE_CATEGORIES : FIGURE_FORM_CATEGORIES;
        
        const longitudeSeasonal = {
            "December": "A blog post about finding beautiful winter landscape photo opportunities in Pennsylvania.", "January": "A blog post about the quiet beauty of snow-covered landscapes in the Pittsburgh area.", "February": "A post about cityscape photography on a cold winter's night.", "March": "A post about the first signs of spring in local parks.", "April": "A guide to capturing wildflower blooms in Western PA.", "May": "A post celebrating the lush green landscapes of late spring.", "June": "A guide to the best spots for sunrise photography in the summer.", "July": "A post about capturing dramatic summer thunderstorms.", "August": "A post about finding serene river scenes to escape the summer heat.", "September": "A guide to the best locations for capturing early fall foliage near Pittsburgh.", "October": "A blog post about the peak of autumn colors in Beaver County.", "November": "A post about the moody, atmospheric beauty of late autumn landscapes.",
        };
        const figureFormSeasonal = {
            "December": "A post about gifting a boudoir shoot for the holidays.", "January": "A 'New Year, New You' empowerment-themed post.", "February": "A blog post about a boudoir shoot as the ultimate Valentine's Day gift.", "March": "A post about spring cleaning your mindset and embracing self-love.", "April": "A post celebrating bodies of all types for the 'beach season' ahead.", "May": "A guide to boudoir shoots as a perfect wedding gift for brides.", "June": "A post on celebrating anniversaries with a portrait session.", "July": "A summer-themed confidence boosting post.", "August": "A post about scheduling a session before the busy fall season starts.", "September": "A 'back to you' post after a busy summer with family.", "October": "A darker, more intimate themed boudoir post for autumn.", "November": "A post about being thankful for your body and your journey.",
        };

        const startMonthIndex = MONTHS.indexOf(startMonth);

        for (let m = 0; m < numMonths; m++) {
            const currentMonthIndex = (startMonthIndex + m) % 12;
            const currentMonth = MONTHS[currentMonthIndex];
            
            const availableTopics = Object.keys(baseCategories).filter(k => !['Equipment Review', 'Behind the Shot', 'Custom Topic', 'Monthly Blog Pack'].includes(k));
            const seasonalPrompts = activeBusiness === 'Longitude' ? longitudeSeasonal : figureFormSeasonal;
            const seasonalPrompt = seasonalPrompts[currentMonth];
            let selectedPrompts = [seasonalPrompt];

            while (selectedPrompts.length < numPostsPerMonth && availableTopics.length > 0) {
                const randomIndex = Math.floor(Math.random() * availableTopics.length);
                const randomTopicKey = availableTopics.splice(randomIndex, 1)[0];
                selectedPrompts.push(baseCategories[randomTopicKey]);
            }

            for (let i = 0; i < selectedPrompts.length; i++) {
                setLoadingMessage(`Generating post ${i + 1} of ${numPostsPerMonth} for ${currentMonth}...`);
                try {
                    const post = await generateSinglePost(selectedPrompts[i], 'Varied - Seasonal');
                    post.month = currentMonth;
                    tempPosts.push(post);
                    setBlogPosts([...tempPosts]);
                } catch (e) {
                    setError(`Failed on post ${i + 1} for ${currentMonth}. Please try again.`);
                    console.error(e);
                    setIsLoading(false);
                    setLoadingMessage('');
                    return;
                }
            }
        }
    } else {
        setLoadingMessage('Generating post...');
        const categories = activeBusiness === 'Longitude' ? LONGITUDE_CATEGORIES : FIGURE_FORM_CATEGORIES;
        let prompt = ""; let finalTone = selectedTone; let isMultiModal = false;

        if (selectedTopic === 'Behind the Shot') {
            if (!imageBase64) { setError("Please upload an image for the 'Behind the Shot' story."); setIsLoading(false); return; }
            prompt = categories[selectedTopic]; isMultiModal = true;
        } else if (selectedTopic === 'Equipment Review') {
            if (!equipmentName.trim()) { setError("Please enter the equipment you want to review."); setIsLoading(false); return; }
            finalTone = 'Educational';
            if (activeBusiness === 'Longitude') {
                prompt = `Write a detailed, SEO-optimized review of the ${equipmentName}. Discuss its build quality, key features, performance in the field for landscape photography, pros, and cons. Conclude with who this equipment is best suited for.`;
            } else {
                prompt = `Write a detailed, SEO-optimized review of the ${equipmentName}, specifically for boudoir and portrait photography. Discuss key features like autofocus performance (especially eye-AF), bokeh quality, sharpness, and how it renders skin tones. Cover pros, cons, and conclude with who this equipment is best suited for in the portrait genre.`;
            }
        } else if (selectedTopic === 'Custom Topic') {
            prompt = customTopic;
            if (!prompt.trim()) { setError("Please enter a custom topic."); setIsLoading(false); return; }
        } else {
            prompt = categories[selectedTopic];
        }

        try {
            const post = await generateSinglePost(prompt, finalTone, isMultiModal);
            setBlogPosts([post]);
        } catch(e) {
            console.error(e);
            setError("Failed to generate blog post. The AI might be busy. Please try again in a moment.");
        }
    }
    setIsLoading(false);
    setLoadingMessage('');
  }, [activeBusiness, selectedTopic, customTopic, selectedTone, equipmentName, imageBase64, numPostsPerMonth, startMonth, numMonths, generateSinglePost]);

  const BusinessTab = ({ name, businessKey, icon }) => (
    <button onClick={() => handleBusinessChange(businessKey)} className={`flex items-center gap-3 px-4 py-2 font-semibold rounded-md transition-all duration-200 ${ activeBusiness === businessKey ? 'bg-rose-700 text-white shadow-lg' : 'bg-zinc-700 text-zinc-300 hover:bg-zinc-600' }`} >
      <Icon>{icon}</Icon> <span>{name}</span>
    </button>
  );
  
  const currentCategories = activeBusiness === 'Longitude' ? LONGITUDE_CATEGORIES : FIGURE_FORM_CATEGORIES;
  const currentTones = activeBusiness === 'Longitude' ? LONGITUDE_TONES : FIGURE_FORM_TONES;
  const isReviewMode = selectedTopic === 'Equipment Review';
  const isBehindTheShotMode = selectedTopic === 'Behind the Shot';
  const isMonthlyPackMode = selectedTopic === 'Monthly Blog Pack';

  const getButtonText = () => {
    if (isMonthlyPackMode) return `Generate ${numMonths} Month(s) of Posts`;
    let topicType = 'New';
    if (isReviewMode) { topicType = 'Equipment Review' }
    else if (isBehindTheShotMode) { topicType = 'Behind the Shot Story' }
    else if (selectedTopic !== 'All Topics' && selectedTopic !== 'Custom Topic') { topicType = `'${selectedTopic}'`; } 
    else if (selectedTopic === 'Custom Topic') { topicType = 'Custom'; }
    return `Generate ${topicType} for ${activeBusiness === 'Longitude' ? 'Longitude' : 'Figure & Form'}`;
  }

  const isButtonDisabled = isLoading || (selectedTopic === 'Custom Topic' && !customTopic.trim()) || (isReviewMode && !equipmentName.trim()) || (isBehindTheShotMode && !imageBase64);
  
  let lastMonth = '';

  return (
    <div className="min-h-screen bg-zinc-900 text-white font-sans">
      <div className="container mx-auto p-4 md:p-8">
        <header className="text-center mb-8 border-b border-zinc-700 pb-6">
          <div className="flex justify-center items-center gap-3 mb-2">
            <Icon><Bot className="w-8 h-8 text-rose-400" /></Icon>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-100">Strategic Blog Post Generator</h1>
          </div>
          <p className="text-zinc-400 max-w-2xl mx-auto">Your personal AI content assistant. Generate SEO-optimized blog posts for your photography businesses with one click.</p>
        </header>

        <div className="flex justify-center items-center gap-4 mb-6">
          <BusinessTab name="Longitude Photography" businessKey="Longitude" icon={<Camera />} />
          <BusinessTab name="Figure & Form" businessKey="FigureForm" icon={<Building2 />} />
        </div>

        <div className="max-w-xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label htmlFor="topic-select" className="block text-sm font-medium text-zinc-400 mb-2 text-center">1. Select a Category</label>
                <div className="relative">
                    <Icon className="text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"><BookOpen /></Icon>
                    <select id="topic-select" value={selectedTopic} onChange={(e) => handleTopicChange(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-zinc-800 border border-zinc-600 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-rose-500">
                        <option value="All Topics">All Topics (Random)</option>
                        {Object.keys(currentCategories).map(topic => ( <option key={topic} value={topic}>{topic}</option> ))}
                        <option value="Custom Topic">Write my own topic...</option>
                    </select>
                </div>
            </div>
            <div className={`${isReviewMode || isBehindTheShotMode || isMonthlyPackMode ? 'opacity-50' : ''}`}>
                <label htmlFor="tone-select" className="block text-sm font-medium text-zinc-400 mb-2 text-center">2. Choose a Tone</label>
                <div className="relative">
                    <Icon className="text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"><Feather /></Icon>
                    <select id="tone-select" value={selectedTone} onChange={(e) => setSelectedTone(e.target.value)} disabled={isReviewMode || isBehindTheShotMode || isMonthlyPackMode} className="w-full pl-10 pr-4 py-3 bg-zinc-800 border border-zinc-600 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-rose-500 disabled:cursor-not-allowed">
                       {isReviewMode && <option>Educational (Review)</option>}
                       {isBehindTheShotMode && <option>{activeBusiness === 'Longitude' ? 'Inspirational' : 'Empowering'}</option>}
                       {isMonthlyPackMode && <option>Varied - Seasonal</option>}
                       {!isReviewMode && !isBehindTheShotMode && !isMonthlyPackMode && currentTones.map(tone => ( <option key={tone} value={tone}>{tone}</option> ))}
                    </select>
                </div>
            </div>
        </div>
        
        {isMonthlyPackMode && (
             <div className="max-w-2xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-in">
                <div>
                    <label htmlFor="month-select" className="block text-sm font-medium text-zinc-400 mb-2 text-center">3. Start Month</label>
                    <div className="relative">
                        <Icon className="text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"><CalendarDays /></Icon>
                        <select id="month-select" value={startMonth} onChange={(e) => setStartMonth(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-zinc-800 border border-zinc-600 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-rose-500">
                            {MONTHS.map(month => <option key={month} value={month}>{month}</option>)}
                        </select>
                    </div>
                </div>
                 <div>
                    <label htmlFor="num-posts-select" className="block text-sm font-medium text-zinc-400 mb-2 text-center">4. Posts per Month</label>
                    <div className="relative">
                        <Icon className="text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"><Hash /></Icon>
                        <select id="num-posts-select" value={numPostsPerMonth} onChange={(e) => setNumPostsPerMonth(parseInt(e.target.value))} className="w-full pl-10 pr-4 py-3 bg-zinc-800 border border-zinc-600 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-rose-500">
                            {[1, 2, 3, 4].map(n => <option key={n} value={n}>{n} Post{n > 1 ? 's' : ''}</option>)}
                        </select>
                    </div>
                </div>
                <div>
                    <label htmlFor="num-months-select" className="block text-sm font-medium text-zinc-400 mb-2 text-center">5. Number of Months</label>
                    <div className="relative">
                        <Icon className="text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"><CalendarDays /></Icon>
                        <select id="num-months-select" value={numMonths} onChange={(e) => setNumMonths(parseInt(e.target.value))} className="w-full pl-10 pr-4 py-3 bg-zinc-800 border border-zinc-600 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-rose-500">
                            {[1, 2, 3, 4, 5, 6].map(n => <option key={n} value={n}>{n} Month{n > 1 ? 's' : ''}</option>)}
                        </select>
                    </div>
                </div>
            </div>
        )}

        {isBehindTheShotMode && (
          <div className="max-w-xl mx-auto mb-8 animate-fade-in">
              <label className="block text-sm font-medium text-zinc-400 mb-2 text-center">3. Upload Your Photo</label>
              {imagePreview ? (
                <div className="relative group">
                  <img src={imagePreview} alt="Uploaded preview" className="w-full h-auto rounded-lg shadow-lg" />
                  <button onClick={clearImage} className="absolute top-2 right-2 p-1 bg-black/50 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"><XCircle className="w-6 h-6" /></button>
                </div>
              ) : (
                <div className="flex items-center justify-center w-full">
                    <label htmlFor="image-upload-input" className="flex flex-col items-center justify-center w-full h-48 border-2 border-zinc-600 border-dashed rounded-lg cursor-pointer bg-zinc-800 hover:bg-zinc-700 transition-colors">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <ImageUp className="w-10 h-10 mb-3 text-zinc-400" />
                            <p className="mb-2 text-sm text-zinc-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-zinc-500">PNG, JPG, or WEBP (MAX. 4MB)</p>
                        </div>
                        <input id="image-upload-input" type="file" className="hidden" accept="image/png, image/jpeg, image/webp" onChange={handleImageChange} />
                    </label>
                </div> 
              )}
          </div>
        )}

        {selectedTopic === 'Custom Topic' && (
            <div className="max-w-xl mx-auto mb-8 animate-fade-in">
                <label className="block text-sm font-medium text-zinc-400 mb-2 text-center">3. Enter Your Custom Topic Below</label>
                <div className="relative">
                    <Icon className="text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"><Edit /></Icon>
                    <textarea value={customTopic} onChange={(e) => setCustomTopic(e.target.value)} placeholder="e.g., 'A post about black and white photos for a minimalist office.'" className="w-full pl-10 pr-4 py-3 bg-zinc-800 border border-zinc-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-500" rows="3" />
                </div>
            </div>
        )}
        
        {isReviewMode && (
            <div className="max-w-xl mx-auto mb-8 animate-fade-in">
                <label className="block text-sm font-medium text-zinc-400 mb-2 text-center">3. Enter Equipment to Review</label>
                <div className="relative">
                    <Icon className="text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"><SlidersHorizontal /></Icon>
                    <input value={equipmentName} onChange={(e) => setEquipmentName(e.target.value)} placeholder="e.g., 'Canon RF 85mm f/1.2L' or 'Godox AD200 Pro'" className="w-full pl-10 pr-4 py-3 bg-zinc-800 border border-zinc-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-500" />
                </div>
            </div>
        )}

        <div className="text-center mb-8">
          <button onClick={generateBlogPost} disabled={isButtonDisabled} className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-rose-600 to-pink-600 text-white font-bold text-lg rounded-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100">
            {isLoading ? ( <><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div><span>{loadingMessage || 'Generating...'}</span></> ) 
            : ( <><Sparkles className="w-6 h-6" /><span>{getButtonText()}</span></> )}
          </button>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {error && ( <div className="bg-red-900/50 border border-red-700 text-red-200 p-4 rounded-lg flex items-center gap-3"><Icon><ThumbsDown /></Icon><p>{error}</p></div> )}
          
          {blogPosts.map((post, index) => {
              const showMonthHeader = post.month && post.month !== lastMonth;
              if(showMonthHeader) lastMonth = post.month;
              return (
                <React.Fragment key={index}>
                  {showMonthHeader && (
                    <div className="mt-12 mb-4">
                      <h2 className="text-3xl font-bold text-center text-rose-300 tracking-wider">{post.month} Content Plan</h2>
                      <hr className="w-24 h-1 mx-auto my-2 bg-rose-500 border-0 rounded"></hr>
                    </div>
                  )}
                  <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 shadow-2xl animate-fade-in space-y-4">
                    <h3 className="text-xl font-bold text-center text-zinc-200">Blog Post {blogPosts.length > 1 && `(${index + 1} of ${blogPosts.length})`}</h3>
                      <OutputField label="Title" content={post.title} />
                      <OutputField label="Meta Description" content={post.metaDescription} />
                      <OutputField label="SEO Slug" content={post.slug} />
                      <OutputField label="Tags" content={post.tags} />
                      <OutputField label="Blog Body" content={post.body} isBody={true} />
                  </div>
                </React.Fragment>
              )
          })}
        </div>
      </div>
       <style dangerouslySetInnerHTML={{ __html: `
          .animate-fade-in { animation: fadeIn 0.5s ease-in-out; }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
       `}}/>
    </div>
  );
}

// --- This is the crucial part that was missing ---
// It tells React where to render the App component.
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);

