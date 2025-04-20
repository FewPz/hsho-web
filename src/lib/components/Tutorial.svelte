<script lang="ts">
  // No specific script logic needed for this static section
  const launcherDownloadUrl = "https://github.com/kunseru/nnd-gamelauncher/releases/tag/Release";
  const discordInviteUrl = "https://discord.com/invite/GBbWQys5Xr"; // Added Discord URL
</script>

<section id="tutorial" class="py-16 md:py-24 bg-dark-card">
<div class="container mx-auto px-4">
  <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 text-primary-light">
    How to Download & Play
  </h2>

  <!-- Video Tutorials Section -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
      <!-- Thai Video -->
      <div class="text-center">
          <h3 class="text-2xl font-semibold mb-6 text-light-text">
              วิธีดาวน์โหลดเกม (วิดีโอ) 🇹🇭
          </h3>
          <div class="aspect-video w-full mx-auto rounded-lg overflow-hidden shadow-xl bg-black">
               <iframe
                  class="w-full h-full"
                  src="https://www.youtube.com/embed/lFbpnQRLo7k?start=2"
                  title="Video Tutorial: How to Download HSH Private Server (Thai)"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen>
              </iframe>
          </div>
      </div>
      <!-- English Video -->
      <div class="text-center">
          <h3 class="text-2xl font-semibold mb-6 text-light-text">
              How to Download (Video) 🇬🇧 / 🇺🇸
          </h3>
          <div class="aspect-video w-full mx-auto rounded-lg overflow-hidden shadow-xl bg-black">
               <iframe
                  class="w-full h-full"
                  src="https://www.youtube.com/embed/82IzNxJF0vo"
                  title="Video Tutorial: How to Download HSH Private Server (English)"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen>
              </iframe>
          </div>
      </div>
  </div>

  <!-- Download Button & Text Steps Section -->
  <div class="max-w-4xl mx-auto">

      <!-- Prominent Download Button -->
      <div class="text-center mb-12">
           <a
              href={launcherDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 bg-[#121212] hover:bg-primary-dark text-white font-bold text-lg px-8 py-3 rounded-md shadow-md transition-colors duration-200"
           >
               <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              Download Launcher (GitHub)
           </a>
           <p class="text-xs text-dark-subtle mt-2">(Always check GitHub releases for the latest version)</p>
      </div>

      <!-- Text Steps -->
      <div class="text-center mb-10">
           <h3 class="text-2xl font-semibold text-light-text">
              Download Steps (Text Guide)
          </h3>
      </div>

      <div class="bg-dark-bg p-6 md:p-8 rounded-lg shadow-inner">
          <ol class="list-decimal list-outside text-left text-lg text-light-subtle space-y-4 ml-5">
              <li>Ensure you own 'Home Sweet Home: Online' on Steam. <strong>Install it</strong> if you haven't already.</li>
              <li>Download the HSH Private Server Launcher from GitHub:
                  <a href={launcherDownloadUrl} target="_blank" rel="noopener noreferrer" class="text-primary-light hover:underline font-semibold break-words">
                      {launcherDownloadUrl}
                  </a>
                  (Download the `.zip` file from the latest 'Release').
              </li>
              <li><strong>Extract</strong> the downloaded Launcher `.zip` file into a <strong>new, empty folder</strong> on your computer (e.g., `C:\HSH_Private_Server`).</li>
              <li>Open Steam, right-click 'Home Sweet Home: Online' → Properties → Installed Files → <strong>Browse</strong>. This opens the official game folder.</li>
              <li>Select and <strong>copy all files and folders</strong> from the official Steam game directory.</li>
              <li>Navigate back to your HSH Private Server Launcher folder. Go into the `App` subfolder, then into the `Release` subfolder (<strong>Create `App` and then `Release` folders if they don't exist</strong>). Paste the copied game files here. The structure should be:
                  <code class="text-xs bg-dark-card p-1 rounded">[Your Launcher Folder]/App/Release/[Game Files & Folders Here]</code>
              </li>
              <li>Go back to your main HSH Private Server Launcher folder and run the <strong>`GameLauncher.exe`</strong> (the one *outside* the `App/Release` folder).</li>
              <li>The launcher should show "Ready to Update" or "Patching...". Wait for it to download any necessary updates.</li>
              <li>Once patching is complete, the 'Play' button will activate. Click it and enjoy!</li>
          </ol>
      </div>
  </div>

  <!-- Help Links Section -->
   <div class="text-center mt-16 space-y-4 md:space-y-0 md:space-x-8">
     <a href="/support" class="inline-block text-primary-light hover:underline font-semibold">
       Need Help? Visit the Support Page →
     </a>
     <span class="hidden md:inline text-dark-subtle">|</span>
     <a
        href={discordInviteUrl}
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-1.5 text-primary-light hover:underline font-semibold"
      >
          <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.317 4.488a18.07 18.07 0 00-4.176-1.315 14.13 14.13 0 00-.633.861 14.885 14.885 0 00-8.986 0 14.21 14.21 0 00-.633-.861 18.07 18.07 0 00-4.176 1.315A19.32 19.32 0 00.101 16.74a18.16 18.16 0 005.977 4.771.94.94 0 001.15-.243 13.81 13.81 0 00.733-1.536.83.83 0 00-.233-.994 12.22 12.22 0 01-2.288-1.638.86.86 0 01-.101-.994c.267-.39.633-.734.933-.994a13.19 13.19 0 008.986 0c.3.26.666.605.933.994a.86.86 0 01-.101.994 12.45 12.45 0 01-2.288 1.638.83.83 0 00-.233.994 13.81 13.81 0 00.733 1.536.94.94 0 001.15.243 18.16 18.16 0 005.977-4.771 19.11 19.11 0 00-1.809-12.252zm-4.684 9.183a2.54 2.54 0 01-2.483 2.545 2.54 2.54 0 01-2.483-2.545V13.4a2.54 2.54 0 012.483-2.545 2.54 2.54 0 012.483 2.545v.271zm-6.286 0a2.54 2.54 0 01-2.483 2.545 2.54 2.54 0 01-2.483-2.545V13.4a2.54 2.54 0 012.483-2.545 2.54 2.54 0 012.483 2.545v.271z"/>
          </svg>
       Join Discord for Support →
     </a>
   </div>

</div>
</section>