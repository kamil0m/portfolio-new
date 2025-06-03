import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex flex-col h-auto w-full px-6 bg-white font-extralight 
    tablet:flex-row-reverse tablet:justify-between tablet:items-start tablet:pb-3">
      <div className="grid grid-cols-2 tablet:grid-cols-3 tablet:width-4/5 tablet:gap-6 tablet:text-center">
        <div>
          <h5 className="my-3">Tel</h5>
          <div className="text-xs">(+33) 06 12 87 41 45</div>
        </div>
        <div>
          <h5 className="my-3">E-mail</h5>
          <div className="text-xs">kamil0markowski@gmail.com</div>
        </div>
        <div>
          <h5 className="my-3">On line</h5>
          <div className="flex text-md font-light gap-2 tablet:justify-center">
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
