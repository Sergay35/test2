// import  { FC } from 'react'
// import { SubmitHandler, useForm, Controller } from 'react-hook-form'
// import { IOption, ISignUp} from './app.interface'
// import ReactSelect from 'react-select'
// import { getValue, options } from './App'


// const signUp: FC = () => {
//    const {
//     register,
//     handleSubmit,
//     formState: { errors},
//     reset,
//     control,
//     } = useForm <ISignUp>({
//         mode: 'onChange',
//     })

//     const onSubmit: SubmitHandler<ISignUp> = date => {
//         console.log(data)
//         reset()
//     }
//     return (
//         <div style={{ textAlign: 'center' }}>
//             <h1>Sign Up</h1>
//             <form onSubmit={handleSubmit(onSubmit)} style={{ width: '66%', margin: '0 auto'}}>
//              <div>
//                <input 
//                   { ... register('name', {
//                     required: 'Name is required field!',
//                      })}
//                      placeholder='name'
//                 />
//                  {errors?.name && (
//                    <div style={{ color: 'red ', marginBottom: 10 }}>{errors.name.message}</div>
//                   )}
//              </div>  
//              <div>
//                 <input 
//                 { ... register('email', {
//                     required: 'Email is required field!',
//                     pattern: {
//                         value:
//                         /^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$/,
//                         message: 'Please enter valid email!',
//                     },
//                 })}
//                  placeholder='email' 
//                 />
//                 {errors?.email && (
//                 <div style={{ color: 'red ', marginBottom: 10 }}>{errors.email.message}</div>
//                 )}
//             </div>
//   <button>Send</button>
// </form>
//         </div>
//     )
// }
//  export default signUp