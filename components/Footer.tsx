const links = [
  'Company Info',
  'Privacy',
  'Contact Us',
  'Cookie Policy',
  'Info Legal dnd Privacy',
];

const Footer = () => {
  return (
    <footer className="flex justify-center items-center border-t-2 border-dark">
      <div className="flex flex-col items-center p-8 gap-4">
        <span className="text-md font-light text-center">
          Copyright © 2023 Pirelli & C. S.p.A. - P.IVA: 00860340157 - v. 2.1.25
          IP1
        </span>
        <ul className="flex flex-col md:flex-row gap-4 text-md font-light text-center">
          {links.map((link) => (
            <li
              key={link}
              className="cursor-pointer hover:underline"
            >
              {link}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
