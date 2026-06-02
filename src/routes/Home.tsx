import { useMutation } from 'convex/react'
import { api } from '../../convex/_generated/api'
import { useState } from 'react'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-blue-950 font-sans">
      {/* Header */}
      <header className="bg-blue-900 text-white py-6 px-4 sticky top-0 z-50 shadow-md">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight text-blue-200">Welcome to My Website!</h1>
          <nav className="hidden md:flex gap-6">
            <a href="#about" className="hover:text-blue-200 transition">About</a>
            <a href="#beyond" className="hover:text-blue-200 transition">Beyond the Card</a>
            <a href="#schedule" className="bg-white text-blue-900 px-4 py-2 rounded-full font-semibold hover:bg-blue-50 transition">Book Now</a>
          </nav>
        </div>
      </header>

      {/* Hero / Intro */}
      <section id="about" className="py-16 px-4 bg-blue-50">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-12">
          <div className="w-48 h-48 md:w-64 md:h-64 bg-blue-200 rounded-2xl overflow-hidden shadow-xl flex-shrink-0 border-4 border-white">
            <img 
              src="https://i.postimg.cc/wB88KdSf/christian-jpg.jpg" 
              alt="Christian Burris" 
              className="w-full h-full object-cover shadow-inner"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-blue-900">Nice to Meet You!</h2>
            <div className="space-y-6 text-lg text-blue-800 leading-relaxed text-left md:text-left">
              <p>
                My Name is <span className="font-bold text-blue-900">Christian Burris</span>.
                I am a licensed local agent who serves families throughout Louisiana with affordable coverage through Security Plan Life Insurance Company.
              </p>
              
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">About Me</h3>
                <p>
                  Most likely like you, I was born and raised in Shreveport, Louisiana! I graduated as a Salutatorian from Booker T. Washington High School. I also attended Southern University at Shreveport and LSUS!
                </p>
              </div>

              <p>
                Before pursuing my career in insurance, I spent two years working with a local nonprofit organization focused on environmental and community improvement because giving back to my community has always been my passion!
              </p>

              <p>
                Today, I proudly work as an Executive Assistant and Insurance Agent with Security Plan Life Insurance Company.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="max-w-xl mx-auto mt-10 px-4">
          <div className="bg-blue-900 text-white p-5 md:p-6 rounded-xl shadow-lg border-t-4 border-blue-400 text-center">
            <p className="font-bold text-lg mb-4 underline decoration-blue-400 underline-offset-4">My mission is simple:</p>
            <ul className="space-y-2 mb-6 inline-block text-left text-blue-50 text-sm md:text-base">
              <li className="flex items-center gap-2">
                <span className="text-blue-400 font-bold">✔</span> Educate people.
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400 font-bold">✔</span> Protect loved ones.
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400 font-bold">✔</span> Help people prepare for the unexpected.
              </li>
            </ul>
            <div className="mt-1 pt-4 border-t border-blue-800/50">
               <p className="text-xl md:text-2xl font-black italic text-blue-100 tracking-tight">Are you secure?</p>
            </div>
          </div>
        </div>
      </section>

      {/* Beyond the Business Card */}
      <section id="beyond" className="py-20 px-4 bg-white text-blue-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Beyond the Business Card</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 shadow-sm">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Do You Already Have Life Insurance?</h3>
              <p className="mb-6 text-blue-800 leading-relaxed">
                You can never have too much protection! Especially if your coverage is only through your job!
              </p>
              <div className="bg-white p-4 rounded-xl border-l-4 border-blue-600">
                <p className="font-bold text-blue-900 mb-3">Many people don’t realize:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">!</span>
                    <p className="text-blue-800">Job insurance may end when you leave!</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 shadow-sm">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">What is Security Plan?</h3>
              <p className="mb-6 text-blue-800 leading-relaxed">
                Security Plan has been a trusted company throughout Louisiana, Mississippi, and Arkansas for decades.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="text-blue-600 text-xl">✔</span>
                  <p className="text-blue-800 font-medium">No medical exam in most cases</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Scheduling */}
      <section id="schedule" className="py-20 px-4 bg-blue-900 text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Let's Connect</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center gap-6">
              <a href="tel:+13184014040" className="flex items-center justify-center gap-3 bg-white text-blue-900 py-4 px-8 rounded-xl font-bold text-lg hover:bg-blue-50 transition shadow-lg">
                Call Me
              </a>
              <a href="mailto:christianburris11@gmail.com" className="flex items-center justify-center gap-3 bg-blue-700 text-white py-4 px-8 rounded-xl font-bold text-lg hover:bg-blue-600 border border-blue-500 transition shadow-lg">
                Email Me
              </a>
            </div>
            <div className="bg-white text-blue-900 rounded-2xl p-6 shadow-2xl">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-blue-200 py-12 px-4 text-center">
        <p>© {new Date().getFullYear()} Christian Burris</p>
      </footer>
    </div>
  )
}

function BookingForm() {
  const [step, setStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [formData, setFormData] = useState({ name: '', email: '' })
  
  const createBooking = useMutation(api.bookings.create)

  const days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date()
    d.setDate(d.getDate() + i)
    return d
  })

  const times = ["08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"]

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedDate || !selectedTime) return
    await createBooking({
      name: formData.name,
      email: formData.email,
      startTime: selectedDate.getTime()
    })
    setStep(3)
  }

  if (step === 3) {
    return <div className="text-center py-8"><h3 className="text-2xl font-bold">Scheduled!</h3></div>
  }

  return (
    <div>
      <h3 className="text-xl font-bold mb-4 text-center">Schedule Consultation</h3>
      {step === 1 && (
        <div className="space-y-6">
          <div className="grid grid-cols-4 gap-2">
            {days.map((d, i) => (
              <button key={i} onClick={() => setSelectedDate(d)} className={`p-2 rounded-lg ${selectedDate?.toDateString() === d.toDateString() ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-800'}`}>
                {d.getDate()}
              </button>
            ))}
          </div>
          {selectedDate && (
            <div className="grid grid-cols-2 gap-2">
              {times.map((t) => (
                <button key={t} onClick={() => setSelectedTime(t)} className={`py-2 px-3 rounded-lg text-sm ${selectedTime === t ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-800'}`}>
                  {t}
                </button>
              ))}
            </div>
          )}
          <button disabled={!selectedDate || !selectedTime} onClick={() => setStep(2)} className="w-full bg-blue-900 text-white py-3 rounded-xl font-bold">Next</button>
        </div>
      )}
      {step === 2 && (
        <form onSubmit={handleBooking} className="space-y-4">
          <input required className="w-full border p-3 rounded-lg" placeholder="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
          <input required type="email" className="w-full border p-3 rounded-lg" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
          <button type="submit" className="w-full bg-blue-900 text-white py-3 rounded-xl font-bold">Confirm</button>
        </form>
      )}
    </div>
  )
}
