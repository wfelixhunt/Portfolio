const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rajshekhar26.github.io/cleanfolio',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'William Felix Hunt',
  role: 'Full Stack Web Developer',
  description:
    'Freelance Web Developer based in Nashville, Tennessee. I have a bachelors degree in Mass Communication from Middle Tennessee State University and after many years of working full time in the field of live concert production, I signed up for a coding Bootcamp in 2021. I am looking forward to starting small and filling my time in between gigs with exciting new work. Thanks for looking!',
  resume: 'https://example.com',
  social: {
    linkedin: "https://www.linkedin.com/in/william-felix-hunt-2470534a/",
    github: "https://github.com/william-hunt88",
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Haul-That',
    description:
      'An Uber style service that puts you and your truck to work!',
    stack: ['ExpressJs', 'MongoDB', 'React', 'GraphQL', 'React-Bootstrap'],
    sourceCode: "https://github.com/alehr45/haul-that",
    livePreview: "https://haul-that.herokuapp.com/",
  },
  {
    name: 'Crypto-Stock Wallet',
    description:
      'A virtual wallet that stores your searches and updates in realtime through the use of an outside API',
    stack: ['Semantic UI', 'Javascript', 'HTML & CSS'],
    sourceCode: "https://github.com/joelecox1/crypto-stock-compare",
    livePreview: "https://joelecox1.github.io/crypto-stock-compare/",
  },
  {
    name: "Advance-it",
    description:
      'A tool made specifically to compile resources for a live concert event.',
    stack: ['HTML & CSS', 'Javascript', 'Handlebars'],
    sourceCode: "https://github.com/william-hunt88/Advance-It-",
    livePreview: "https://shrouded-beach-19084.herokuapp.com/",
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Bootstrap',
  'Git',
  'Semantic UI',
  'MongoDb',
  'GraphQL',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'wfelixhunt@gmail.com',
}

export { header, about, projects, skills, contact }
