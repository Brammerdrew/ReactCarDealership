
import Button from "./Button"
import Input from "./Input"

import {useForm} from "react-hook-form"
import { server_calls } from '../api/server';
import { useDispatch, useStore } from "react-redux/es/exports";
import { setColor, setMake, setMileage,  setModel , setPrice, setYear } from "../redux/slices/RootSlice";


interface ContactFormProps {
    id?: string;
}

const ContactForm = ( props:ContactFormProps) => {
    const { register, handleSubmit } = useForm({})
    const dispatch = useDispatch()
    const store = useStore()

    const onSubmit = (data:any) => {
      console.log(`ID: ${typeof props.id}`);
      console.log(props.id)
      console.log(data)
      if (props.id && props.id.length > 0) {
        server_calls.update(props.id[0], data)
        console.log(`Updated: ${ data.make } ${data.model } ${ props.id }`)
      } else {
        dispatch(setMake(data.make))
        dispatch(setModel(data.model))
        dispatch(setYear(data.year))
        dispatch(setPrice(data.price))
        dispatch(setMileage(data.mileage))
        dispatch(setColor(data.color))

        server_calls.create(store.getState())
      }
    }
    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="make">Make</label>
            <Input {...register('Make')} name='make' placeholder="make" />
          </div>
          <div>
            <label htmlFor="model">Model</label>
            <Input {...register('Model')} name='model' placeholder="model" />
          </div>
          <div>
            <label htmlFor="email">Year</label>
            <Input {...register('year')} name='year' placeholder="year" />
          </div>
          <div>
            <label htmlFor="mileage">Mileage</label>
            <Input {...register('mileage')} name='mileage' placeholder="Mileage" />
          </div>
          <div>
            <label htmlFor="color">Color</label>
            <Input {...register('color')} name='color' placeholder="color" />
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <Input {...register('price')} name='price' placeholder="price" />
          </div>
          <div className="flex p-1">
            <Button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    )
  }
  
  export default ContactForm