import React from 'react'
import type { NextPage } from 'next'
import { GetServerSideProps } from 'next'
import { BasicArticle, getRandomDog } from 'lib/randomRepo'
import RandomAnimalLayout from 'components/RandomAnimalLayout'
import { useRouter } from 'next/router'
export const getServerSideProps: GetServerSideProps = async (context) => {
  var data = await getRandomDog()
  return {
    props: {
      data,
    },
  }
}

const RandomDogs: NextPage<{ data: BasicArticle }> = ({ data }) => {
  const router = useRouter()
  const refReshData = () => {
    router.replace(router.asPath)
  }
  return <RandomAnimalLayout data={data} onRefresh={refReshData} />
}

export default RandomDogs
