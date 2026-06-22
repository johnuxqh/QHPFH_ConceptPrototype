type PlaceholderScreenProps = {
  screenName: string;
};

export function PlaceholderScreen({ screenName }: PlaceholderScreenProps) {
  return (
    <section className="placeholder-card" aria-live="polite">
      <h2>{screenName}</h2>
      <p>Current screen: {screenName}</p>
      <p>Placeholder only. Game logic and visual polish come in later phases.</p>
    </section>
  );
}
