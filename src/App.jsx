import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import ReviewsPage from "./pages/HomePage/components/ReviewsPage"
import BannersPage from "./pages/HomePage/components/BannersPage"
import SideBar from "./components/SideBar/SideBar"
import DiscountPage from "./pages/HomePage/components/DiscountsPage/DiscountPage"
import PopUpPage from "./pages/HomePage/components/PopUpPage"
import NotificationPage from "./pages/HomePage/components/NotificationPage"
import ReasonsPage from "./pages/HomePage/components/ReasonsPage"
import ReasonsFinishPage from "./pages/HomePage/components/ReasonsFinishPage"

function App() {

  return (
   <div className='w-full h-full flex justify-end'>
        <Routes>
          <Route path="/" element={<HomePage />} >
            <Route path="discounts" element={<DiscountPage />} />
            <Route path="reviews"  element={<ReviewsPage />}/>
            <Route path="banners"  element={<BannersPage />}/>
            <Route path="pop__up" element={<PopUpPage />} />
            <Route path="notification" element={<NotificationPage />} />
            <Route path="reasons__reject" element={<ReasonsPage />}/>
            <Route path="reasons__finish" element={<ReasonsFinishPage />}/>
          </Route>
        </Routes>
   </div>
  )
}

export default App
