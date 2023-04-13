import { FormProvider, useForm } from 'react-hook-form'
import './App.css'
import ContactForm from './components/ContactForm'

function App() {

  const methods = useForm()

  return (
    <div className="App">
      <FormProvider {...methods}>
        <ContactForm methods={methods}/>
      </FormProvider>
    </div>
  )
}

export default App
