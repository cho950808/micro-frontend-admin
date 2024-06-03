import { cloneElement } from 'react'
import { APP_NAME } from '@/constants/app.constant'
import type { CommonProps } from '@/types/common'

interface loginProps extends CommonProps {
    content?: React.ReactNode
}

const LoginPage = ({ children, content, ...rest }: loginProps) => {
    return (
        <div className="grid lg:grid-cols-3 h-screen">
            <div
                className="bg-no-repeat bg-cover py-6 px-16 flex-col justify-between hidden lg:flex h-full"
                style={{
                    backgroundImage: `url('/img/auth-side-bg.png')`,
                }}
            >
                {/* <Logo mode="dark" /> */}
                <div>
                    
                </div>
                <span className="text-white">
                    Copyright &copy; {`${new Date().getFullYear()}`}{' '}
                    <span className="font-semibold">{`${APP_NAME}`}</span>{' '}
                </span>
            </div>
            
            <div className="col-span-2 flex flex-col justify-center items-center bg-white dark:bg-gray-800">
                <div className="xl:min-w-[450px] px-8">
                    <div className="mb-8">{content}</div>
                    {children
                        ? cloneElement(children as React.ReactElement, {
                              ...rest,
                          })
                        : null}
                </div>
            </div>
        </div>
    )
}

export default LoginPage
