export default function Pagetitle({ children }: Props) {
  return (
    <h1 className="font-bold text-primary text-lg md:(text-xl) md:(text-2xl pr-4) ">
      {children}
    </h1>
  );
}

interface Props {
  children: string;
}
