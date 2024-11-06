export default function Productlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <div>
        <h2>Feature Products Section</h2>
      </div>
    </div>
  );
}
