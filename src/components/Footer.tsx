import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex flex-col h-30 w-full px-6 mt-5 bg-white font-extralight">
      <div className="grid grid-cols-2">
        <div>
          <h5 className="my-3">Tel</h5>
          <div className="text-xs">(+33) 06 12 87 41 45</div>
        </div>
        <div>
          <h5 className="my-3">E-mail</h5>
          <div className="text-xs">kamil0markowski@gmail.com</div>
        </div>
        <div>
          <h5 className="my-3">En ligne</h5>
          <div className="flex text-md font-light gap-2">
            <a target="_blank" href="https://github.com/kamil0m">
              <FaGithub />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/kamil0m/">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="py-5 text-xs">© 2025 by Kamil Markowski</div>
    </div>
  )
}
