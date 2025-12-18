function Component({ name, years }) {
  return (
    <li className="mb-6">
      <p className="font-bold text-3xl">{name}</p>
      <p className="text-grey font-medium text-xl">{years} Ans d'experience</p>
    </li>
  );
}

export default Component;
