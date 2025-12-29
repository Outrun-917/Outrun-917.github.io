function Component({ name, years }) {
  if (years === "1") {
    return (
      <li className="mb-6">
        <p className="font-bold text-3xl">{name}</p>
        <p className="text-grey font-medium text-xl">{years} An d'expérience</p>
      </li>
    );
  } else {
    return (
      <li className="mb-6">
        <p className="font-bold text-3xl">{name}</p>
        <p className="text-grey font-medium text-xl">
          {years} Ans d'expérience
        </p>
      </li>
    );
  }
}

export default Component;
