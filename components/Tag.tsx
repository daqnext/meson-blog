import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="m-1 rounded-lg border border-x-blue-500 py-1 px-3 text-sm font-medium uppercase text-blue-500 transition duration-500 ease-in-out hover:bg-blue-500 hover:text-gray-100 group-hover:bg-blue-500 group-hover:text-gray-100 dark:group-hover:text-gray-900">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
