import { FaNodeJs } from "react-icons/fa";
import { MdCss, MdHtml, MdJavascript } from "react-icons/md";
import { RiReactjsLine } from "react-icons/ri";
import arrowRight from "../assets/arrow-right.svg";
import { Typescript } from "./ui/icons/typescript";

type VariantType = 'front' | 'back'

type MyProjectsCardTypes = {
  name: string;
  description: string;
  mainPic?: string;
  iconPath?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  goTo?: string
  variant: VariantType
  language: string[]
}

export function MyProjectsCard(data: MyProjectsCardTypes,) {
  function getLanguageIcon(language: string) {
    switch (language) {
      case('html'):
      return <MdHtml className="text-orange-500 w-7 h-7"/>
      case('css'):
      return <MdCss className="text-blue-500 w-7 h-7"/>
      case('js'):
      return <MdJavascript className="text-yellow-500 w-[1.85rem] h-[1.85rem] -ml-1.5"/>
      case('ts'):
      return <Typescript/>
      case('react'):
      return <RiReactjsLine className="text-teal-600 w-[18  px] h-[18 px]"/>
      case('node'):
      return <FaNodeJs className="text-lime-500 w-[16px] h-[16px]"/>
    }
  }

  return (
    (data.variant === 'front' ? (
    <div className="flex flex-col items-center justify-around gap-4 rounded-md bg-lightPrimary lg:min-w-[350px] p-4 shadow-2xl transition-colors dark:bg-cardPrimary">
      <div className="flex w-full flex-1 gap-5 rounded-lg transition-colors lg:items-center lg:justify-center">
        <img
          src={data.mainPic}
          alt=""
          className="xs:rounded-lg lg:rounded-xl lg:h-full"
        />
      </div>
      <button
        className="flex lg:max-h-[8rem] lg:h-[112px] w-full select-none items-center justify-between rounded-lg border-2 border-strokeDefault/30 bg-lightTerciary/5 transition-colors hover:border-strokeFocus dark:bg-[#1E1B24] xs:flex-1 xs:p-5 lg:py-0 lg:flex-auto "
        onClick={data.onClick}
      >
        <div className="flex flex-1 flex-col items-start">
          <div className="flex gap-4 items-center ">
            <h1 className="font-geologica text-lg font-medium text-lightFonts transition-colors dark:text-gray-50">
              {data.name}
            </h1>
            {data.language && (
              <div className="flex gap-1 items-center justify-center">
                {data.language.map((lang, index) => (
                  <div key={index} >
                    {getLanguageIcon(lang)}
                  </div>
                ))}
              </div>
            )}
          </div>
          <span className="max-h-[58rem] text-left font-maven text-sm text-lightSubtitles transition-colors dark:text-gray-400">
            {data.description.substring(0, 80) + '...' }
          </span>
        </div>
        <div className="p-2 xs:hidden lg:block">
          <img src={arrowRight} alt="" className="w-2.5" />
        </div>
      </button>
    </div>
   
    ) : (
      <div className="flex flex-col items-center justify-around gap-4 rounded-md bg-lightPrimary lg:min-w-[350px] lg:max-w-[350px] p-4 shadow-2xl transition-colors dark:bg-cardPrimary">
      <a href={data.goTo} target="_blank"
        className="flex lg:max-h-[8rem] lg:h-[112px] w-full select-none items-center justify-between rounded-lg border-2 border-strokeDefault/30 bg-lightTerciary/5 transition-colors hover:border-strokeFocus dark:bg-[#1E1B24] xs:flex-1 xs:p-5 lg:py-0 lg:flex-auto "
       
      >
        <div className="flex flex-1 flex-col items-start gap-2">
        <div className="flex gap-4 items-center ">
            <h1 className="font-geologica text-lg font-medium text-lightFonts transition-colors dark:text-gray-50">
              {data.name}
            </h1>
            {data.language && (
              <div className="flex gap-1 items-center justify-center">
                {data.language.map((lang, index) => (
                  <div key={index} >
                    {getLanguageIcon(lang)}
                  </div>
                ))}
              </div>
            )}
          </div>
          <span className="max-h-[58rem] text-left font-maven text-sm text-lightSubtitles transition-colors dark:text-gray-400">
            {data.description }
          </span>
        </div>
        <div className="p-2 xs:hidden lg:block">
          <img src={arrowRight} alt="" className="w-2.5" />
        </div>
      </a>
    </div>
    )
  ))
}
