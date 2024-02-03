import { PlanCard } from "./components/UI/plan-card/Plan-card";
const cardState = {
  plan: 'start',
  perks: ['1 слайд (обложка)', 'составление текста инфографики', 'дизайн под вашу аудиторию', 'сроки: 1-2 рабочих дня'],
  price: '599',
  discount: '',
  prevPrice: ''
}
function App() {
  return (
    <div className='app'>
      <PlanCard data={cardState}/>
    </div>
  );
}

export default App;
