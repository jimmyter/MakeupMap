export default function InfoPageEyebrow() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Eyebrow</h2>
      <img src="/images/eyebrow.jpg" alt="Eyebrow" className="mb-4 max-w-sm w-full" />
      <p>
        Eyebrows frame the face and significantly impact perceived expression. Defined brows can lift the eye area and create a polished appearance. Trends vary — from bold Insta-brows to fluffy, natural arches.
      </p>
      <p className="mt-4">
        Use a spoolie to brush hairs up before shaping. Fill in sparse areas with a brow pencil or powder, using light strokes to mimic hair. For strong hold and shape, finish with a brow gel or wax.
      </p>
      <p className="mt-4">
        Microblading and brow lamination are popular semi-permanent treatments. Just be sure to tailor brow shape to your facial proportions.
      </p>
      <ul className="mt-4 list-disc list-inside">
        <li><a href="https://example.com/brow-shaping" target="_blank" className="text-blue-600 underline">How to Shape Your Brows</a></li>
        <li><a href="https://example.com/brow-products" target="_blank" className="text-blue-600 underline">Top Brow Products</a></li>
      </ul>
    </div>
  );
}
