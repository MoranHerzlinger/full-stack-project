// Important! - This is just a naive implementation for example. You can modify all of the implementation in this file.

const Books = [
        {
            id: "1",
            title: "The Time Traveler's Guide",
            author: "Jennifer Parker",
            publicationYear: "2015",
            description: "In this captivating guide, Jennifer Parker takes you on an extraordinary journey through time, unraveling the mysteries of temporal travel. Discover the secrets of ancient civilizations, witness historic events firsthand, and explore the possibilities of future technology. This book is a must-read for any curious adventurer looking to transcend the boundaries of time."
        },
        {
            id: "2",
            title: "The Art of Persistence",
            author: "Robert Simmons",
            publicationYear: "2008",
            description: "Robert Simmons explores the power of persistence and its role in achieving success. Drawing inspiration from great achievers throughout history, he provides valuable insights and practical advice on overcoming obstacles, staying motivated, and reaching your goals. This book serves as a guide for those seeking to unlock their potential and transform setbacks into triumphs."
        },
        {
            id: "3",
            title: "The Hidden Code",
            author: "Emily Mitchell",
            publicationYear: "2012",
            description: "Unravel the secrets of a mysterious code in this gripping thriller by Emily Mitchell. Follow the protagonist, a brilliant cryptographer, as they decode intricate puzzles and race against time to prevent a global catastrophe. With its blend of suspense, adventure, and intellectual intrigue, this book will keep you on the edge of your seat until the final page."
        },
        {
            id: "4",
            title: "Beyond the Stars",
            author: "Sarah Adams",
            publicationYear: "2020",
            description: "Embark on an awe-inspiring journey to distant galaxies with Sarah Adams as your guide. Explore breathtaking celestial phenomena, encounter alien civilizations, and contemplate the vastness of the universe. Beyond the Stars combines captivating storytelling with the wonders of astrophysics to ignite your imagination and expand your cosmic perspective."
        },
        {
            id: "5",
            title: "The Serendipity Principle",
            author: "Jonathan Brooks",
            publicationYear: "2013",
            description: "In this thought-provoking book, Jonathan Brooks explores the concept of serendipity and its profound impact on our lives. Drawing on real-life stories and scientific research, he reveals how chance encounters, unexpected discoveries, and fortunate accidents can lead to remarkable breakthroughs and life-changing experiences. Discover how to cultivate serendipity and open yourself up to a world of infinite possibilities."
        },
        {
            id: "6",
            title: "The Enigma of Existence",
            author: "Michael Thompson",
            publicationYear: "2011",
            description: "Delve into the fundamental questions of existence with philosopher Michael Thompson. From the nature of consciousness to the mysteries of the cosmos, this book tackles the biggest enigmas of our reality. With philosophical rigor and clarity, Thompson navigates the complexities of existence, challenging our perceptions and inspiring profound introspection."
        },
        {
            id: "7",
            title: "The Power of Simplicity",
            author: "Linda Roberts",
            publicationYear: "2014",
            description: "Linda Roberts reveals the transformative power of simplicity in this enlightening book. Through practical advice and inspiring anecdotes, she guides readers on a journey to declutter their minds and embrace a more balanced and fulfilling life. Experience the freedom that comes from simplifying your environment, relationships, and priorities."
        },
        {
            id: "8",
            title: "The Forgotten City",
            author: "David Anderson",
            publicationYear: "2017",
            description: "Enter a lost world in David Anderson's thrilling adventure, The Forgotten City. Join the protagonist as they unravel ancient mysteries, navigate treacherous landscapes, and confront hidden dangers in their quest to uncover a long-lost civilization. This captivating tale will transport you to a realm of excitement, intrigue, and archaeological wonders."
        },
        {
            id: "9",
            title: "The Mindful Journey",
            author: "Julia Carter",
            publicationYear: "2019",
            description: "Embark on a transformative journey of self-discovery and mindfulness with Julia Carter. Through practical exercises and insightful reflections, this book offers a roadmap to living with greater awareness and finding inner peace. Discover the power of mindfulness to enhance your relationships, reduce stress, and cultivate a deeper connection with yourself and the world around you."
        },
        {
            id: "10",
            title: "The Quantum Paradox",
            author: "Thomas Foster",
            publicationYear: "2016",
            description: "Explore the mind-bending world of quantum physics with Thomas Foster as your guide. From wave-particle duality to the mysteries of entanglement, this book unravels the paradoxes that lie at the heart of quantum theory. Foster's accessible explanations and engaging storytelling make complex concepts comprehensible, inviting readers into the fascinating realm of quantum mechanics."
        },
        {
            id: "11",
            title: "The Art of Resilience",
            author: "Sophia Davis",
            publicationYear: "2022",
            description: "Sophia Davis offers a powerful exploration of resilience in the face of adversity. Drawing on personal experiences and inspiring stories, she provides practical strategies and emotional support for navigating life's challenges. Discover the strength within you, cultivate resilience, and emerge stronger from setbacks, setbacks, and struggles."
        },
        {
            id: "12",
            title: "The Lost Kingdom",
            author: "Daniel Harris",
            publicationYear: "2013",
            description: "Join Daniel Harris on an epic quest to uncover the secrets of a fabled lost kingdom. From ancient ruins to hidden artifacts, follow the protagonist as they embark on a perilous adventure filled with twists and turns. This thrilling tale of discovery will keep you captivated until the final revelation."
        },
        {
            id: "13",
            title: "The Art of Mindfulness",
            author: "Emily Turner",
            publicationYear: "2014",
            description: "Emily Turner guides readers on a transformative journey to cultivate mindfulness in their daily lives. Through meditation exercises, reflections, and practical tips, this book provides a comprehensive approach to living with presence and intention. Embrace the art of mindfulness and unlock a deeper sense of peace, joy, and fulfillment."
        },
        {
            id: "14",
            title: "The Last Invention",
            author: "Jonathan Richards",
            publicationYear: "2021",
            description: "In a world on the brink of technological revolution, Jonathan Richards explores the consequences of humanity's last great invention. From artificial intelligence to genetic engineering, this book delves into the ethical dilemmas and societal implications of groundbreaking technological advancements. Brace yourself for a thought-provoking exploration of the future that awaits us all."
        },
        {
            id: "15",
            title: "The Silent Path",
            author: "Emma Thompson",
            publicationYear: "2010",
            description: "Journey into the depths of self-discovery and spiritual awakening with Emma Thompson as your guide. The Silent Path offers a meditative exploration of consciousness, inner peace, and the interconnectedness of all things. Through poetic prose and profound insights, this book invites readers to embark on a transformative inward journey."
        },
        {
            id: "16",
            title: "The Atlas of Wonders",
            author: "Peter Collins",
            publicationYear: "2018",
            description: "Peter Collins takes readers on a mesmerizing voyage through the world's most extraordinary places. From natural wonders to architectural marvels, this beautifully illustrated atlas showcases the awe-inspiring diversity of our planet. Discover hidden gems, cultural treasures, and breathtaking landscapes that will ignite your wanderlust and expand your horizons."
        },
        {
            id: "17",
            title: "The Essence of Happiness",
            author: "Olivia Williams",
            publicationYear: "2016",
            description: "Olivia Williams explores the elusive nature of happiness and offers practical wisdom for cultivating lasting joy. Through philosophical insights, psychological research, and personal anecdotes, this book reveals the keys to finding contentment and living a fulfilling life. Discover the essence of happiness and unlock the secrets to a more joyful existence."
        },
        {
            id: "18",
            title: "The Midnight Chronicles",
            author: "Michael Roberts",
            publicationYear: "2012",
            description: "Step into a world of magic, mystery, and mythical creatures in Michael Roberts' enchanting fantasy series, The Midnight Chronicles. Join a courageous group of heroes as they battle dark forces, unravel ancient prophecies, and embark on epic quests to save their realm from impending doom. Immerse yourself in a captivating tale that will transport you to realms beyond imagination."
        },
        {
            id: "19",
            title: "The Art of Forgiveness",
            author: "Sarah Cooper",
            publicationYear: "2017",
            description: "Sarah Cooper delves into the transformative power of forgiveness, offering profound insights and practical advice for healing emotional wounds. Through personal stories and compassionate guidance, this book illuminates the path to forgiveness, both for oneself and others. Discover the liberation that comes from letting go of resentment and embracing a more compassionate heart."
        },
        {
            id: "20",
            title: "The Quantum Labyrinth",
            author: "Matthew Evans",
            publicationYear: "1950",
            description: "Matthew Evans takes readers on a mind-bending journey through the quantum world, exploring the profound mysteries that lie at its core. From parallel universes to quantum entanglement, this book demystifies complex concepts and invites readers to contemplate the nature of reality itself. Prepare to have your mind expanded and your understanding of the universe challenged."
        },
        {
            id: "21",
            title: "The Pursuit of Dreams",
            author: "Jessica Thompson",
            publicationYear: "1960",
            description: "Jessica Thompson embarks on a compelling exploration of dreams and their transformative power. Drawing on personal anecdotes and inspiring stories, she guides readers on a journey of self-discovery, encouraging them to pursue their deepest aspirations. Discover how to overcome obstacles, embrace your passions, and live a life aligned with your true purpose."
        },
        {
            id: "22",
            title: "The Secret Garden",
            author: "Sophie Anderson",
            publicationYear: "2020",
            description: "Sophie Anderson weaves a magical tale of friendship, nature, and the power of imagination in The Secret Garden. Follow the young protagonist as they unlock the mysteries of a hidden garden, discovering the transformative magic it holds. This enchanting story reminds us of the beauty and resilience found in nature and the joys of cultivating our own secret worlds."
        },
        {
            id: "23",
            title: "The Power of Now",
            author: "Daniel Foster",
            publicationYear: "2013",
            description: "Daniel Foster guides readers on a transformative journey to embrace the present moment and find inner peace. Drawing on spiritual wisdom and practical techniques, this book offers a pathway to living with mindfulness, acceptance, and gratitude. Discover the transformative power of living in the now and unlock a deeper sense of joy and fulfillment."
        },
        {
            id: "24",
            title: "The Alchemist's Legacy",
            author: "Oliver Davies",
            publicationYear: "2014",
            description: "Embark on a quest for ancient secrets and mystical artifacts in Oliver Davies' gripping adventure, The Alchemist's Legacy. Join a group of daring explorers as they decipher cryptic codes, unravel hidden alchemical knowledge, and confront nefarious adversaries. This thrilling tale blends history, mythology, and high-stakes action into a mesmerizing narrative."
        },
        {
            id: "25",
            title: "The Wisdom of Solitude",
            author: "Lucy Mitchell",
            publicationYear: "2018",
            description: "Lucy Mitchell explores the transformative power of solitude and the wisdom it brings. Drawing on philosophical insights, psychological research, and personal experiences, this book illuminates the profound benefits of embracing moments of aloneness. Discover how solitude can nurture self-reflection, creativity, and a deeper connection with oneself and the world around us."
        },
        {
            id: "26",
            title: "The Lost Heir",
            author: "Rachel Wilson",
            publicationYear: "2011",
            description: "In this enthralling fantasy epic, Rachel Wilson takes readers on a journey of prophecy, destiny, and self-discovery. Follow the young protagonist as they navigate a treacherous kingdom, uncover their true heritage, and confront formidable enemies. The Lost Heir is a tale of courage, resilience, and the power of embracing one's true identity."
        },
        {
            id: "27",
            title: "The Art of Letting Go",
            author: "Matthew Johnson",
            publicationYear: "2016",
            description: "Matthew Johnson delves into the liberating power of letting go in this insightful book. Through personal anecdotes and practical guidance, he offers strategies for releasing attachment, embracing change, and finding inner peace. Discover the art of surrender, and unlock the transformative potential of letting go in all aspects of life."
        },
        {
            id: "28",
            title: "The Enchanted Forest",
            author: "Emma Scott",
            publicationYear: "2019",
            description: "Step into the magical realm of The Enchanted Forest, a captivating tale of wonder and adventure by Emma Scott. Join the young protagonist as they journey through mystical landscapes, encounter mythical creatures, and discover their own inner strength. This enchanting story reminds us of the extraordinary beauty and possibilities that exist within the natural world."
        },
        {
            id: "29",
            title: "The Art of Connection",
            author: "David Wilson",
            publicationYear: "2017",
            description: "David Wilson explores the transformative power of human connection in this insightful book. Drawing on psychology, social science, and personal experiences, he offers practical advice and strategies for fostering meaningful relationships, building empathy, and cultivating a sense of belonging. Discover the art of connection and unlock the profound benefits it brings to our lives."
        },
        {
            id: "30",
            title: "The Quantum Mind",
            author: "Sophia Evans",
            publicationYear: "2022",
            description: "Sophia Evans delves into the fascinating intersection of quantum physics and consciousness in The Quantum Mind. Explore the cutting-edge research and philosophical implications of the mind-matter relationship, and discover the potential for quantum principles to shed light on the nature of thought, perception, and the self. Prepare to embark on a mind-expanding journey through the mysteries of the mind and the universe."
        }
    ]
;

module.exports = {Books};