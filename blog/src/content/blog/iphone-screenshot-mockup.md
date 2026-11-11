---
title: "How to Create an iPhone Screenshot Mockup"
description: "Learn how to create an iPhone screenshot mockup step by step. Get exact pixel dimensions, avoid UI clipping, and export crisp device frames for free."
pubDate: 2026-11-05
keyword: "iphone screenshot mockup"
pillar: "screenshot-mockups"
product: "portfolio-frame"
tags: ["iphone screenshot mockup","device mockups","app presentation","product design"]
faq:
  - q: "How do I put a screenshot into an iPhone mockup for free?"
    a: "You can use a free client-side web utility like the Portfolio Frame web app or Shots.so. You drop your screenshot into the canvas, select your desired iPhone model, adjust padding or 3D tilt, and export a high-resolution PNG without watermarks or account signups."
  - q: "What size screenshot do I need for an iPhone 16 Pro mockup?"
    a: "An iPhone 16 Pro screenshot must be exactly 1206 × 2622 pixels at 3x Retina resolution (402 × 874 logical points). Matching this native aspect ratio prevents blurry text, letterboxing, and distorted UI elements."
  - q: "Can I submit an iPhone mockup directly to the Apple App Store?"
    a: "No. Apple App Store Connect requires flat, rectangular graphics that match the exact display dimensions of supported devices without external bezels, transparent drop shadows, or tilted perspective angles. Framed mockups are strictly for marketing websites, pitch decks, and social media."
  - q: "What is the difference between a clay mockup and a realistic mockup?"
    a: "A realistic mockup features factory hardware textures, glass reflections, and authentic color finishes like Natural Titanium. A clay mockup uses a smooth, matte, monochromatic shell that removes hardware distractions so the viewer focuses entirely on your user interface."
draft: false
---
An iPhone screenshot mockup places your raw mobile screen capture inside a photorealistic or stylized device frame to showcase apps, websites, or features in context. You can create one in seconds using client-side browser tools, Figma plugins, or Photoshop Smart Objects by aligning your screenshot to the native display resolution (such as 1206 × 2622 px for an iPhone 16 Pro).

When you drop a raw, rectangular screenshot onto a website hero section, pitch deck, or social media feed, it often looks unfinished. Floating rectangles fail to communicate scale, hand ergonomics, or platform context. Placing your screen inside an authentic Apple chassis grounds your software, giving clients and prospective users an immediate mental model of how your product feels in daily use.

In this guide, I will break down how to choose the right device style, give you the exact pixel dimensions for modern iPhone screens, walk through three practical creation methods, and highlight common framing mistakes like Dynamic Island clipping and double status bars.

## 1. Choosing the Right iPhone Mockup Style

Different presentations call for different visual treatments. Choosing the wrong chassis style can distract from your UI or clash with your brand aesthetics.

### Photorealistic Mockups

Photorealistic mockups reproduce actual factory materials. They include brushed titanium borders, optical camera lenses, speaker cutouts, physical buttons, and subtle glass reflections.

* **When to use:** Product launch landing pages, press releases, high-stakes investor pitch decks, and commercial hardware advertisements.
* **Visual characteristics:** Accurate device colorways (such as Black Titanium, Desert Titanium, or Midnight), directional specular highlights, and physical depth.

Photorealistic frames make an existing app feel tangible and ready to install. However, because realistic hardware has high contrast, ensure the frame does not overpower low-contrast mobile screens.

### Clay and Minimalist Mockups

Clay mockups strip away metallic sheens, camera lenses, and speaker grills. They reduce the iPhone chassis to a smooth, monochromatic matte silhouette, usually rendered in soft white, graphite, or neutral gray.

* **When to use:** Modern SaaS marketing websites, product documentation, and UI/UX design portfolios.
* **Visual characteristics:** Zero physical textures, uniform border radiuses, and flat shading.

I often recommend clay frames for portfolio case studies. When an art director or recruiter reviews your work, you want them evaluating your typographic scale and navigation flows, not admiring Apple's hardware chassis.

### 3D Tilted and Isometric Angles

Isometric and tilted mockups rotate the device along the X, Y, or Z axes. Rather than facing the user dead-on, the device appears suspended in three-dimensional space.

* **When to use:** Website hero banners, feature announcement cards, and social media teasers.
* **Visual characteristics:** Perspective distortion, subtle vertical tilt, and floating soft contact drop shadows.

Tilted presentations look modern and dynamic, but keep the angle moderate (under 15 to 20 degrees). Extreme perspective angles compress screen text and make interface elements unreadable.

![TODO: Diagram comparing photorealistic, clay, and 3D tilted iPhone mockups](/blog/images/iphone-mockup-styles.png)

## 2. iPhone Screen Dimensions and Aspect Ratio Guide

Before dropping an image into any generator, your screenshot must match the target device's native pixel grid. Stretching an older iPhone screen into a modern frame causes blurred typography, distorted icons, and letterboxing.

Here are the native resolutions for modern iPhones rendered at their native Retina scales:

| Device Model | Screen Size | Logical Points | Native Pixel Resolution (@3x / @2x) |
| :--- | :--- | :--- | :--- |
| **iPhone 16 Pro Max / 17 Pro Max** | 6.9" | 440 × 956 pt | `1320 × 2868 px` (@3x) |
| **iPhone 16 Pro / 17 Pro** | 6.3" | 402 × 874 pt | `1206 × 2622 px` (@3x) |
| **iPhone 15 / 16 Plus** | 6.7" | 430 × 932 pt | `1290 × 2796 px` (@3x) |
| **iPhone 15 / 16 Base** | 6.1" | 393 × 852 pt | `1179 × 2556 px` (@3x) |
| **iPhone SE (3rd Gen / Home Button)** | 4.7" | 375 × 667 pt | `750 × 1334 px` (@2x) |

### The Importance of 1:1 Aspect Matching

Modern iPhones with the Dynamic Island use taller aspect ratios (roughly 19.5:9) compared to older rectangular displays. If you capture a screen on an older device or resize an asset haphazardly, your mockup tool will either stretch the graphic or leave awkward gaps along the rounded screen corners.

For an in-depth breakdown of maintaining visual fidelity across different screen formats, see our article on [The Complete Guide to Beautiful Screenshots](https://portfolioframe.com/blog/complete-guide-to-beautiful-screenshots).

## 3. Three Ways to Create an iPhone Screenshot Mockup

Depending on your technical stack, available time, and privacy constraints, here are the three primary methods to frame your mobile screenshots.

### Method 1: Instant Client-Side Web Utilities (Fastest)

Browser-based generators are ideal when you need clean marketing assets quickly without setting up design canvases.

Many online tools upload your screenshots to remote cloud servers to process the frame rendering. When I built Portfolio Frame, I wanted a solution that respected data privacy. The [Portfolio Frame web app](https://app.portfolioframe.com/) operates completely client-side via browser canvas and WebGL APIs. Your confidential product designs, unreleased features, or customer dashboards never leave your local machine.

Here is the step-by-step workflow:

1. **Upload or Capture:** Drop your native PNG screenshot directly into the editor canvas.
2. **Select Device Shell:** Choose the iPhone frame under the device mockup options.
3. **Adjust Composition:** Add a 3D tilt, customize background padding, and configure a directional drop shadow to give the phone depth.
4. **Export:** Download the composition as a full-resolution, transparent PNG or compressed JPEG.

Other browser-based tools include Shots.so, which offers solid social templates (you can read our [Portfolio Frame vs Shots.so](https://portfolioframe.com/vs/shots-so) comparison for details), and general utilities reviewed across industry sites like [TheAppLaunchpad mockup analysis](https://theapplaunchpad.com/blog/iphone-mockup-generators/). If you need a desktop-style wrapper instead of mobile, we also provide a guide on how to add browser frame to screenshot assets.

![TODO: Screenshot of Portfolio Frame wrapping an iPhone screen with drop shadow and background controls](/blog/images/portfolio-frame-iphone-editor.png)

### Method 2: Design Tools (Figma and Sketch)

If you work daily in Figma, keeping your mockups inside your vector workspace simplifies presentation slide decks and client handoffs.

1. **Install a Device Plugin:** Plugins like Artboard Studio or Mockup allow you to map flat vector artboards onto perspective shells.
2. **Create a Frame:** Set up a canvas matching the native point size of your target iPhone (e.g., 402 × 874 pt for an iPhone 16 Pro).
3. **Map the Surface:** Select your canvas and use the plugin to project your screen onto the mockup vector.

*Pros:* Complete layout control and zero context-switching from your interface library.
*Cons:* Slower than browser utilities; heavy 3D mockup plugins can bloat large Figma files.

### Method 3: Photoshop Smart Objects (PSD Templates)

For lifestyle marketing assets (such as a person holding a phone in an office setting), Photoshop PSD templates remain standard.

1. **Download a Template:** Source a verified PSD mockup from design libraries like [Unblast phone mockups](https://unblast.com/mockups/phone/iphone/).
2. **Open the Smart Object:** Locate the layer labeled "Place Screen Here" and double-click the Smart Object thumbnail.
3. **Paste Your Screen:** Align your raw image to the canvas boundaries, save the `.psb` file (`Cmd + S` or `Ctrl + S`), and close it.
4. **Export:** Return to the primary `.psd` document, where your screenshot now displays under realistic lighting layers and reflections.

*Pros:* Unmatched photorealism for lifestyle imagery.
*Cons:* Requires an Adobe Creative Cloud subscription, large file sizes (often 200MB+ per file), and destructive raster rendering.

## 4. Critical Mistakes Most Mockup Guides Ignore

Creating an iPhone mockup seems straightforward, but small technical oversights can make your design look sloppy.

### The "Double UI" Glitch

When you take a native screenshot on a physical iPhone, iOS automatically burns the current time, cellular strength, Wi-Fi icon, and battery percentage into the top corners. It also includes the black Home Indicator bar along the bottom edge.

Many mockup generators overlay their own artificial status bar elements directly onto the frame. If you drop a native screen into one of these tools without adjusting settings, your viewers will see two clocks and overlapping battery icons.

*The Fix:* Either crop the top 54 points of your native screenshot before inserting it, or choose a mockup tool that lets you toggle synthetic status overlays off.

### Dynamic Island Safe-Area Cutoffs

On modern devices, Apple's Dynamic Island occupies a centered, pill-shaped cutout at the top of the screen. If you export a design directly from a flat Figma frame where headings were placed too close to the upper edge, the physical island overlay in the mockup shell will obscure your interface text.

Always maintain a top safe-area margin of roughly 54 to 59 points (162 to 177 pixels at 3x) before placing critical branding or navigation labels.

### Marketing Mockups vs. App Store Connect Requirements

Many first-time app founders assume they can upload framed iPhone mockups with tilted perspectives and drop shadows directly into their App Store listing slots. This will result in an immediate upload error.

As outlined in [MobileAction's guide on App Store screenshot sizes](https://mobileaction.co/guide/app-screenshot-sizes-and-guidelines-for-the-app-store/), App Store Connect requires strict 1:1 rectangular graphics without transparency or drop shadows. If you want device frames in your store listing, you must place the mockup onto a flat, non-transparent background canvas sized exactly to Apple's display specifications (such as 1290 × 2796 px) without external alpha channels.

For comparison reviews of tools dedicated solely to App Store listing compliance, check [AppLaunchFlow's app mockup generator review](https://www.applaunchflow.com/blog/best-app-mockup-generators-2026).

### Data Privacy and Pre-Release Leaks

Designers frequently generate mockups for unreleased products, client prototypes, or internal financial apps. If you upload these screenshots to arbitrary, server-rendered mockup websites, your visual data sits on third-party cloud buckets.

Verify that your generator processes frames locally in your browser session using HTML5 Canvas or WebGL. If a tool requires you to upload an image and wait for a server render, avoid using it for proprietary or pre-release screens.

![TODO: Visual comparison showing a proper status bar versus an overlapping double UI glitch](/blog/images/mockup-double-ui-comparison.png)

## 5. Customizing Your Mockup for High-Impact Presentations

Once your screenshot is framed properly, small presentation tweaks will help your image stand out across marketing channels.

* **Background Contrast:** Use a transparent PNG export when placing the device over complex website layouts. If sharing on social media feeds like X or LinkedIn, place the device on a subtle mesh gradient or neutral background to keep the white borders from blending into feed containers.
* **Directional Drop Shadows:** Avoid harsh, tight black outlines. Set a soft, blurred shadow with a slight vertical offset (Y-axis) to create natural separation between the phone and background.
* **Contextual Annotations:** If you are demonstrating a specific product flow, pair your mockup with directional arrows or numbered badges. Highlighting a key button or feature directly on the asset saves viewers from guessing what they are looking at.

## Conclusion and Next Steps

Creating an effective iPhone screenshot mockup comes down to three basic rules: match your native display resolution, leave adequate clearance for the Dynamic Island, and avoid messy double status bars.

If you want a fast, privacy-first way to wrap screenshots in clean iPhone frames, browser shells, or 3D angles right inside your workflow, install [Add Portfolio Frame to Chrome](https://chromewebstore.google.com/detail/kgpdfalcolcdidglbdnfnelgihlocmkf). Everything runs locally on your machine with zero server uploads, keeping your designs private and ready to share in seconds.
