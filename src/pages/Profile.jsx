import Link from 'next/link'
import { useState, useEffect } from 'react'
import { getAuth, updateProfile } from 'firebase/auth'
import {
  updateDoc,
  doc,
  collection,
  getDocs,
  query,
  where,
  orderBy,
  deleteDoc,
} from 'firebase/firestore'
import { db } from '../firebase.config'
import { useRouter } from 'next/router'


const Profile = () => {
  const router = useRouter()

  const auth = getAuth()
  // const [loading, setLoading] = useState(true)
  const [listings, setListings] = useState(null)
  const [changeDetails, setChangeDetails] = useState(false)
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  })
  
  const { name, email } = formData
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center">
        <div className="flex">
          <h1 className="text-3xl font-bold">My profile</h1>
          <button className="btn btn-secondary btn-outline">Logout</button>
        </div>
        <div>
          <div>
            <p>Next Trip</p>
            <p>Beautiful Beach Condo</p>
            <p>Sept 13, 2023 - Sept 19, 2023</p>
            <p>img</p>
          </div>
          <div>
            <p>Last Trip</p>
            <p>Beautiful Beach Condo</p>
            <p>Sept 13, 2023 - Sept 19, 2023</p>
            <p>img</p>
          </div>
          <div className="flex justify-center items-center">
            <p>See complete trip history</p>
            <Link href="/History">
              <button className="btn btn-primary">Click Here</button>
            </Link>
          </div>
        </div>
        <div>
          <h2>Your Properties</h2>
          <div>
            <p>Last Trip</p>
            <p>Beautiful Beach Condo</p>
            <p>img</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
