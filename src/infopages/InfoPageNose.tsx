import styles from './InfoPage.module.css'
import Image from 'next/image'


export default function InfoPageNose() {
  return (
    <div className={styles.page}>
      <h2 className={styles.title}>Nose</h2>
      <Image
        src="/images/nose.jpg"
        alt="Nose"
        width={400}
        height={300}
        className="mb-4 max-w-sm w-full"
      />
      <p className={styles.paragraph}>
        The nose area plays a crucial role in face symmetry. In makeup, it’s typically enhanced with contour and highlight techniques to create shadow and light play. A well-contoured nose can subtly alter face shape without surgery.
      </p>
      <p className={styles.paragraph}>
        Use a cool-toned contour shade for realistic depth, and blend carefully along the sides and tip. A light touch of highlighter down the bridge brings attention to center features.
      </p>
      <p className={styles.paragraph}>
        For bold looks, some artists decorate the nose with gems or glitter — popular in editorial and festival styles. Just make sure to prime the area if you're adding heavy detail.
      </p>
      <ul className="mt-4 list-disc list-inside">
        <li><a href="https://example.com/nose-contour" target="_blank" className="text-blue-600 underline">How to Contour the Nose</a></li>
        <li><a href="https://example.com/editorial-makeup" target="_blank" className="text-blue-600 underline">Editorial Makeup Tips</a></li>
      </ul>
    </div>
  );
}
