import { useState, useRef, useEffect } from 'react';
import { useHistory } from 'umi';

export default function Home() {
  useHistory().push('/tutorial');

  return <div></div>;
}
