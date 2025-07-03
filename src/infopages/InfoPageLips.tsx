import Image from 'next/image'
import styles from './InfoPage.module.css'


export default function InfoPageLips() {
  return (
    <div className={styles.page}>
      <h2 className={styles.title}>Lips</h2>
      <Image 
        src="/lips.jpg" 
        alt="Lips" 
        width={400}
        height={250}
      />
      <p className={styles.paragraph}>
        Lips are the canvas of many expressive makeup looks. From bold reds to subtle nudes, lip makeup sets the tone for your entire aesthetic. Lip prep is essential — exfoliate gently, hydrate with balm, and outline with a liner.
      </p>
      <p className={styles.paragraph}>
        Matte finishes are popular for long-lasting impact, while glosses add volume and shine. Ombre effects, lip tints, and shimmer topcoats are trending now. Try layering different textures for dimension.
      </p>
      <p className={styles.paragraph}>
        Fun fact: the average woman consumes about 4 pounds of lipstick in her lifetime — that's commitment to the look!
      </p>
      <ul className="mt-4 list-disc list-inside">
        <li><a href="https://example.com/lip-basics" target="_blank" className="text-blue-600 underline">Lip Makeup Basics</a></li>
        <li><a href="https://example.com/best-lipsticks" target="_blank" className="text-blue-600 underline">Top Lipsticks in 2025</a></li>
      </ul>
    </div>
  );
}
