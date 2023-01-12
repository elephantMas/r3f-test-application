import { Canvas } from '@react-three/fiber'
import { NextPage } from 'next'
import React, { useCallback, useState } from 'react'

import Text3DObject from '@/components/text3DObject/text3DObject'

import styles from '../../../styles/searchPage.module.css'

const DisplayCube: NextPage = () => {
  const [searchText, setSearchText] = useState('')

  const onChangeText = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
  }, [])

  const onClickButton = useCallback(() => {
    alert(searchText)
  }, [searchText])

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-[#0A2647] to-[#91D8E4]">
      <div className="h-full w-full absolute z-0">
        <Canvas
          camera={{
            fov: 45,
            near: 0.1,
            far: 1000,
            position: [0, 0, 20],
          }}
        >
          <directionalLight position={[1, 1, 1]} intensity={0.8} />
          <ambientLight args={[0xffffff]} intensity={0.2} />
          <Text3DObject
            position={[0, 2, 0]}
            text="Spotify Danceabilty Search"
            size={1}
            color={'aqua'}
          ></Text3DObject>
        </Canvas>
      </div>
      <div className="h-full w-full absolute z-10">
        <div className="flex flex-col justify-center items-center h-screen">
          <div className="">
            <input
              value={searchText}
              onChange={onChangeText}
              className="bg-transparent border-black border-2 text-black placeholder-black"
              type="search"
              placeholder="曲名を入力"
            />
          </div>
          <div className={styles.button} onClick={onClickButton}>
            検索
          </div>
        </div>
      </div>
    </div>
  )
}

export default DisplayCube
