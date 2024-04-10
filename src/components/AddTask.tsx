import { addTitleState } from '@/recoil/state/addTitleState';
import { Card, CardBody } from '@nextui-org/react'
import React from 'react'
import { useRecoilValue } from 'recoil'

export default function AddTask() {
    const addTitle = useRecoilValue(addTitleState);

  return (
    <>
        <div className='mt-10'>
            {addTitle.map((task) => (
                <Card key={task.id} className='m-3'>
                    <CardBody>
                        <p>{task.title}</p>
                    </CardBody>
                </Card>
            ))}
        </div>
    </>
  )
}
