import { useState, useRef, useEffect } from 'react';
import { useHistory } from 'umi';

export default function Home() {
  console.log(111);

  useHistory().push('/tutorial');

  return <div></div>;
}
