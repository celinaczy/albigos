# Albigos Website
Albigos is a simple website featuring an animated cat image with accompanying music. It was inspired by [a blog post on flynerd.pl](https://www.flynerd.pl/2018/12/ta-strona-nie-ma-sensu-prosty-tutorial-html-i-css.html) and my neighbor's mighty cat Albigos. It's a playful project that can be customized and extended.

## Features
- Animated cat image
- Background music on mouseover
- Google Analytics integration

## Preview
![image](https://github.com/celinaczy/albigos/assets/48793247/ea0143cf-b289-467f-b34f-1d55b60caa99)

## Usage
1. Clone the repository: `git clone https://github.com/your-username/albigos-website.git`
2. Open `index.html` in your preferred web browser.

## Customization
Feel free to customize the website to suit your preferences:
- Replace `albigos.png` with your own cat image.
- Change the background image (`rays.jpg`) or use a solid color.
- Modify the audio file (`albigos-song.mp3`) or add your own music.

## Google Analytics
The website is configured with Google Analytics. If you want to track analytics for your site, replace the Google Analytics ID in the script tag with your own.

```html
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'YOUR-GA-ID');
</script>
```

## Deployment
The website is currently deployed at [https://www.website-url.com](https://www.website-url.com).
