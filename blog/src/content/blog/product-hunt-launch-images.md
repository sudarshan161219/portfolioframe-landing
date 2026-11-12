---
title: "Product Hunt Launch Images: Specs & Gallery Guide"
description: "Learn exact dimensions, file sizes, and gallery frameworks for your product hunt launch images. Avoid gray bars, optimize thumbnails, and convert voters."
pubDate: 2026-11-12
keyword: "product hunt launch images"
pillar: "maker-visuals"
product: "portfolio-frame"
tags: ["product hunt","screenshots","indie hacker","design","marketing"]
faq:
  - q: "What image size does Product Hunt use for gallery screenshots?"
    a: "The recommended size for gallery screenshots is 1270 × 760 pixels, which is roughly a 1.67:1 aspect ratio. Keep file sizes below 3 MB in PNG, JPG, or GIF format."
  - q: "Do animated GIFs autoplay on the Product Hunt homepage?"
    a: "No. Animated thumbnail GIFs only animate when a user hovers over your post on a desktop browser. They stay frozen on frame one on mobile and in default desktop feeds."
  - q: "How many gallery images should I upload for a Product Hunt launch?"
    a: "Product Hunt requires a minimum of 2 images to display a gallery carousel. For the best conversion rate, upload between 5 and 7 images to tell a complete visual story."
  - q: "Can you upload video files directly, or do they have to be YouTube links?"
    a: "Product Hunt does not support direct video file uploads (like MP4 or MOV). You must host your demo video on YouTube as a Public or Unlisted video and paste the URL."
  - q: "Why does Product Hunt put gray bars on the sides of my images?"
    a: "Product Hunt uses a 1.67:1 container for its image gallery. If you upload a standard 16:9 desktop capture or a 4:3 screenshot without padding, the viewer adds gray letterbox bars to fill the empty space."
draft: false
---
The optimal dimensions for your **product hunt launch images** in the gallery carousel are **1270 × 760 pixels** (an aspect ratio of roughly 1.67:1), with every file kept under **3 MB**. Your thumbnail logo should be uploaded as a square image at **600 × 600 pixels** (minimum 240 × 240 pixels).

When you prepare for launch day, code and copy get most of your attention. But your visual assets decide whether people actually click through from the homepage and upvote your product. If you drop raw, full-screen desktop screenshots into the gallery, the platform crops them awkwardly or adds distracting gray bars. 

When I launched Portfolio Frame on Product Hunt, I spent hours dialing in the image framing, padding, and gallery sequence. Those visual details helped visitors understand the tool within three seconds of opening the page. This guide covers the exact dimensions, design rules, and gallery frameworks you need to build high-converting launch graphics.

## Official Product Hunt Image Sizes and Technical Specs

Product Hunt accepts PNG, JPG, and GIF files. While the platform allows files up to a certain size, keeping individual assets under 2 MB ensures fast load times when traffic spikes on launch day.

Here is a quick reference table based on the official [Product Hunt posting guidelines](https://help.producthunt.com/en/articles/479557-how-to-post-a-product):

| Asset Type | Recommended Dimensions | Aspect Ratio | Minimum Size | Max File Size |
| :--- | :--- | :--- | :--- | :--- |
| **Gallery Slides** | 1270 × 760 px | ~1.67:1 | 2 images min | 3 MB (PNG, JPG, GIF) |
| **Thumbnail Logo** | 600 × 600 px | 1:1 (Square) | 240 × 240 px | 3 MB (PNG, JPG, GIF) |
| **Hub / Header Banner** | 1200 × 630 px | 1.91:1 | 1200 × 630 px | 3 MB (PNG, JPG) |
| **Demo Video** | 1920 × 1080 px | 16:9 | YouTube Link | Hosted on YouTube |

### The 3 MB File Limit Reality

Product Hunt's upload form technically supports files up to 3 MB, but you should aim for well under that mark. On launch day, hundreds of potential upvoters will open your page on mobile networks. If your gallery features six uncompressed, heavy GIFs that total 15 MB, your gallery will stutter and fail to load before the user bounces. Keep static PNGs crisp by running them through compression, and keep animated GIFs short.

Also note that native video uploads are not supported. If you want a video in your gallery, you must provide a YouTube URL (set to Public or Unlisted) as outlined in the [Product Hunt page builder guide](https://help.producthunt.com/en/articles/17834537-4-build-your-product-page). The video thumbnail takes the first slot in your gallery carousel.

## Thumbnail Design: Maximizing Homepage CTR

Your thumbnail logo is the only visual asset visible on the Product Hunt front page. Its sole job is earning a click.

![TODO: Diagram comparing static thumbnail versus animated hover state with frame 1 highlighted](/blog/images/ph-thumbnail-frame1-guide.png)

### The First-Frame Animated GIF Rule

Many makers upload an animated GIF for their thumbnail to catch the eye. However, animated thumbnails **only play on desktop hover**. In the default feed view and across the entire mobile layout, the thumbnail stays completely static.

Product Hunt freezes the animation on **Frame 1**.

If your GIF starts with a blank canvas, a fade-in from black, or a blurry transition, your product will appear broken in the main feed. Always design Frame 1 as a bold, complete, high-contrast logo or product snapshot. Treat frames 2 through 30 as a subtle bonus for desktop users who rest their cursor over your card.

For practical examples of high-converting logos, [Do What Matter's thumbnail guide](https://dowhatmatter.com/guides/product-hunt-thumbnail-tips-examples) shows how top products balance motion with static clarity.

### Dark Mode vs. Light Mode Testing

A common mistake indie hackers make is uploading a transparent PNG logo with dark typography. Product Hunt has a popular dark mode. If your logo uses dark gray or black text with no background, it becomes invisible to anyone browsing at night.

Always place your logo inside a solid container card or give the canvas a deliberate background color that contrasts cleanly against both pure white (`#FFFFFF`) and dark slate backgrounds (`#121212`).

### Static Logo vs. Animated GIF

You do not need an animated GIF to reach the top ranks. Use an animated thumbnail only if your product has a visual action that can be demonstrated in 2 seconds (such as an editor turning messy code into clean cards, or a toggle switching states). If your animation is just text sliding in and out, stick with a clean, high-resolution static PNG.

## The Proven 6-Slide Gallery Sequence

Once a visitor clicks into your page, the gallery carousel does the selling. Product Hunt requires at least 2 images, but 5 to 7 slides tell a cohesive product story. Here is the framework I recommend:

![TODO: Visual storyboard of the 6-slide Product Hunt gallery framework](/blog/images/ph-gallery-storyboard-sequence.png)

### Slide 1: The Hero Hook & Value Proposition

Slide 1 is the most important image in your entire launch kit for two reasons:
1. It is the first graphic every visitor sees when landing on your product page.
2. **Product Hunt uses Slide 1 as your Open Graph (OG) social card.** When people share your launch link on X, LinkedIn, or Slack, Slide 1 is the preview image that appears.

Keep Slide 1 simple. Do not clutter it with tiny settings menus. Pair a clear, 6- to 8-word headline explaining your main benefit with a prominent product visual inside a clean browser shell.

### Slide 2: Problem vs. Solution

Show the friction your user currently experiences, followed by how your tool fixes it. A split-screen comparison works well here. For example, show a messy, unformatted terminal or wall of text on the left, and your polished final result on the right.

### Slides 3 & 4: Core Feature Highlights

Dedicate each of these slides to a single signature feature. Instead of showing your entire interface, zoom in on the exact component where the magic happens. 

Add subtle drop shadows, gentle background gradients, and clean browser mockups so the interface stands out from the page background. If you want to know how to style screenshots cleanly without clutter, take a look at our [guide to beautiful screenshots](https://portfolioframe.com/blog/complete-guide-to-beautiful-screenshots).

### Slide 5: Workflow, Integrations, or Developer Experience

Show how your product fits into the user's existing routine. If you built a developer tool, show a neat terminal snippet or a clean code card. If you built an extension, show it running right next to everyday tools.

### Slide 6: Social Proof, Launch Offer, or Maker Note

End your carousel with a reason to act today. You can display:
* A founder note with your photo welcoming hunters.
* An exclusive launch-day perk (like a discount or lifetime license).
* Positive quotes from early beta testers or [styled customer tweets](https://portfolioframe.com/blog/tweet-to-image).

## Common Visual Mistakes That Kill Product Hunt Conversions

I review dozens of launches every month, and most visual mistakes come down to three issues:

### 1. The Dreaded Gray Letterbox Bars

If you take a screenshot on a 16:9 monitor (1920 × 1080) or a MacBook screen (16:10) and upload it directly to Product Hunt, the platform tries to fit your image into its 1.67:1 viewing window. Because the aspect ratios do not match, the viewer inserts thick gray bars on the sides or top to fill the void.

As explained in [FramedShot's gallery guide](https://framed-shot.com/guides/product-hunt-gallery-screenshots-sizes/), you can eliminate letterboxing by placing your raw UI screenshot on a dedicated 1270 × 760 pixel canvas with 40 to 60 pixels of outer padding.

### 2. Ant Text on Mobile Devices

More than 40% of Product Hunt upvoters browse from mobile feeds. If you take a full-width desktop dashboard and shrink it to fit a 1270 × 760 canvas, body text drops to 6 or 8 pixels. Nobody can read it on an iPhone screen.

Crop directly into the core interaction. If you add text callouts or badge annotations, make sure they are at least 24 to 32 pixels in size so they remain legible on smaller screens.

### 3. Choppy, Bloated GIFs

If you want to showcase a live interaction in the gallery, record a short clip, trim it to 4 to 6 seconds, and optimize the color palette. If your file exceeds 3 MB, Product Hunt will either reject the file or load it so slowly that visitors skip past it.

## Preparing and Repurposing Your Product Hunt Launch Images

Designing launch graphics can eat up days if you build everything from scratch. Here is how to streamline asset creation:

### The 1270×760 to 1200×630 Safe Margin Workflow

You will need promotional graphics for social announcements on launch morning. Twitter and LinkedIn link previews use standard 1200 × 630 dimensions (a 1.91:1 ratio), while Product Hunt uses 1270 × 760 (1.67:1).

To avoid designing two separate sets of graphics:
1. Create your canvas at 1270 × 760 pixels.
2. Keep your essential graphics, UI mockups, and text inside a centered safe area of 1100 × 580 pixels.
3. Keep the background colors or gradients continuous out to the edges.

When you crop the sides down to 1200 × 630 for social channels, your headlines and UI mockups will remain centered without getting cut off.

### Choosing the Right Tools

If you are comfortable with Figma, you can set up artboards manually or download UI kits. However, building custom drop shadows, window controls, and padding in Figma takes time.

Many makers use dedicated mockup tools to speed up this process:
* For browser mockups, some choose tools like Screely or Shots.so (you can see how they compare in our breakdown of [Portfolio Frame vs Screely](https://portfolioframe.com/vs/screely) and [Portfolio Frame vs Shots.so](https://portfolioframe.com/vs/shots-so)).
* For local, privacy-focused styling, I built [Portfolio Frame](https://portfolioframe.com/). It is available as a [free web app](https://app.portfolioframe.com/) and a Chrome extension. 

Portfolio Frame lets you capture tabs or paste screenshots, add browser frames or device mockups, customize backgrounds and shadows, and export cleanly without uploading private user data to an external server. Everything processes locally right in your browser.

## Final Pre-Launch Visual Checklist

Before you hit publish on your Product Hunt submission form, run through this quick quality check:

* **Thumbnail tested for contrast:** Verified that the logo is readable in both dark mode and light mode.
* **Frame 1 checked:** If using a GIF thumbnail, verified that Frame 1 works as an attractive standalone static logo.
* **Aspect ratio locked:** All gallery slides are sized at exactly 1270 × 760 pixels with no gray letterboxing.
* **File sizes optimized:** Every static image and GIF is comfortably under 3 MB.
* **Slide 1 verified as an OG card:** Confirmed that the first gallery slide functions well as a social preview image.
* **Mobile legibility:** Opened the images on a phone screen to confirm that headings and UI elements are easy to read.

Clean presentation signals to hunters that you care about quality and craft. Take the extra hour to format your visual assets properly, and you will set your product up for the best possible launch day.

If you need a quick, reliable way to frame UI screenshots with clean browser shells and backgrounds, add [Portfolio Frame to Chrome](https://chromewebstore.google.com/detail/kgpdfalcolcdidglbdnfnelgihlocmkf) for free.
