import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import { usePageMeta } from "../hooks/usePageMeta";
import styles from "./Privacy.module.css";

export default function Privacy() {
  usePageMeta({
    title: "Privacy Policy — Portfolio Frame",
    description:
      "How Portfolio Frame handles data: everything is processed locally in your browser, nothing is uploaded, and license activation only talks to Dodo Payments.",
    path: "/privacy",
  });

  return (
    <div>
      <Nav />
      <main>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>Legal</p>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.updated}>Last updated: September 11, 2026</p>
          <p className={styles.intro}>
            Portfolio Frame is a Chrome extension that turns screenshots into
            polished images using device mockups, backgrounds, and annotations.
            This page explains what data the extension handles and how.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>What Portfolio Frame does locally</h2>
          <p className={styles.p}>
            All image editing happens inside your browser. Screenshots, mockups,
            backgrounds, and annotations are rendered and exported on your
            device. Portfolio Frame does not upload your images or screenshots
            to any server, and we do not have access to the content you create
            with the extension.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>Data stored locally</h2>
          <p className={styles.p}>
            Portfolio Frame uses Chrome's local storage to save:
          </p>
          <ul className={styles.list}>
            <li>
              Your editor preferences (selected background, palette, mockup
              device, and similar settings)
            </li>
            <li>
              Your Pro license activation status, if you've purchased a license
            </li>
          </ul>
          <p className={styles.p}>
            This data stays on your device and syncs only if your browser's own
            sync settings are enabled; Portfolio Frame does not separately
            transmit it.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>Pro license activation</h2>
          <p className={styles.p}>
            Portfolio Frame Pro is unlocked with a one-time license key issued
            through Dodo Payments, our payment processor. When you activate a
            license key, the extension sends the license key itself, plus a
            short device label, to Dodo Payments' servers to verify the key and
            register that activation. The device label is a random identifier
            generated and stored on your device — it is not derived from any
            hardware ID, account, or personal information — and it lets Dodo
            Payments track which of your devices have activated the license,
            since one license can be used on more than one device. The extension
            does not send your email address as part of activation. Payment
            details (card numbers, billing address) are handled entirely by Dodo
            Payments' own checkout page and are never seen by Portfolio Frame or
            stored by us.
          </p>
          <p className={styles.p}>
            See Dodo Payments' own privacy policy for how they handle this data:{" "}
            <a
              href="https://dodopayments.com/legal/privacy-policy"
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              dodopayments.com/legal/privacy-policy
            </a>
            .
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>What we don't do</h2>
          <ul className={styles.list}>
            <li>
              We don't sell or share your data with advertisers or data brokers.
            </li>
            <li>
              We don't track your browsing activity outside of the tab you
              actively choose to capture with the extension.
            </li>
            <li>
              We don't use your data to build user profiles or for purposes
              unrelated to the extension's core function.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>Permissions</h2>
          <p className={styles.p}>
            Portfolio Frame requests the following browser permissions, each
            used only for the stated purpose:
          </p>
          <ul className={styles.list}>
            <li>
              <strong>activeTab / scripting</strong>: to capture the screenshot
              of the tab you choose to edit, and to run the on-page element
              picker, only when you invoke the extension
            </li>
            {/* <li>
              <strong>clipboardWrite</strong>: to copy exported images to your
              clipboard when you choose "Copy to clipboard
            </li> */}
            <li>
              <strong>downloads</strong>: to save exported images and batch
              export ZIP files to your chosen location
            </li>
            <li>
              <strong>storage</strong>: to remember your editor preferences and
              license status between sessions
            </li>
            <li>
              <strong>unlimitedStorage</strong>: to hold captured screenshots
              and export data that can exceed Chrome's default storage limit
            </li>
            <li>
              <strong>contextMenus</strong>: to add a right-click option for
              starting a capture directly from the page
            </li>
          </ul>
          <p className={styles.p}>
            Copying an export to your clipboard and saving files to disk use
            your browser's standard clipboard and file-download APIs, not a
            separate extension permission.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>Changes to this policy</h2>
          <p className={styles.p}>
            If our data practices change, we'll update this page and, where
            required, disclose the change prominently within the extension
            itself.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>Contact</h2>
          <p className={styles.p}>
            Questions about this policy:{" "}
            <a
              href="mailto:portfolioframe@portfolioframe.com"
              className={styles.link}
            >
              portfolioframe@portfolioframe.com
            </a>
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
