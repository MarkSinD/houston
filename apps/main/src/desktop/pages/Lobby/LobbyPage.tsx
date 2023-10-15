import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {ApplicationBackground} from '$atoms'
import {ProgressBar} from '$atoms/ProgressBar/ProgressBar'
import {RocketAnimated} from '$atoms/RocketAnimated/RocketAnimated'

import {useAppDispatch} from '$store/config/store'
import {connect} from '$store/game/control.slice'

export const LobbyPage = () => {
  const [isRocketAction, setIsRocketAction] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(connect())
  }, [dispatch])
  const onAnimationEnd = () => {
    if (!isRocketAction) {
      return
    }
    navigate('/game')
  }

  return (
    <ApplicationBackground isLobby>
      <div className="rocket-lobby-wrap">
        <RocketAnimated
          handleClick={() => {
            setIsLoading(true)
          }}
          isAction={isRocketAction}
          isLobby
          onLaunchAnimationEnd={() => {
            onAnimationEnd()
          }}
        />
      </div>
      <div className="progress-lobby-wrapper">
        <ProgressBar
          animationTime={3}
          isLoading={isLoading}
          onEnd={() => {
            setIsRocketAction(true)
          }}
        />
      </div>
    </ApplicationBackground>
  )
}
