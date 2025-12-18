function Component({ text, href }) {
  return (
    <a
      className="text-xl underline decoration-2 decoration-pastel-green underline-offset-16 tracking-widest"
      href={href}
    >
      {text}
    </a>
  );
}

export default Component;
