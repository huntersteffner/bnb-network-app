import Link from 'next/link'

const Profile = () => {
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
