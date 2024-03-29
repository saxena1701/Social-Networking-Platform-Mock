import React from 'react'
import PropTypes from 'prop-types'

const ProfileAbout = ({profile:{
    user:{name,avatar},
    bio,skills
}}) => {
  return (
    <div class="profile-about bg-light p-2">
          <h2 class="text-primary">{name}'s Bio</h2>
          <p>
            {bio}
          </p>
          <div class="line"></div>
          <h2 class="text-primary">Skill Set</h2>
          <div class="skills">
            {
                skills.map((skill)=>{
                    return <div class="p-1"><i class="fa fa-check"></i> {skill}</div>
                })
            }
          </div>
        </div>
  )
}

ProfileAbout.propTypes = {}

export default ProfileAbout